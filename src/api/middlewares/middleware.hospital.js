import csv from 'csvtojson';
import * as HospitalService from '../services/service.hospital';
import * as Helper from '../../lib/utils/lib.helpers';
import MailService from '../../services/service.email';
import * as HospitalPayload from '../../lib/payloads/lib.payload.hospital';
import config from '../../config/setup';

export const decodeCsv = async(req, res, next) => {
  const { files } = req;
  const hospital = await csv().fromFile(files[0].path);
  req.hospitalFiles = hospital;
  return next();
};

export const fetchHospitalList = async(req, res, next) => {
  const hospitals = await HospitalService.fetchHospitals([]);
  req.hospitals = hospitals;
  return next();
};

export const compareHospitalRecords = async(req, res, next) => {
  const { hospitals: oldHospitals, hospitalFiles } = req;
  const newHospitals = hospitalFiles.map(hospital => {
    const slug = Helper.genUniqueCode(hospital.name);
    return slug;
  });
  const deleteHospital = [];
  hospitalFiles.map(hospital => {
    oldHospitals.map(oldHosp => {
      if (!newHospitals.includes(oldHosp.slug)) {
        deleteHospital.push(oldHosp);
      }
      return oldHosp;
    });
    return hospital;
  });
  req.toBeRemove = deleteHospital;
  return next();
};

export const getHospitalCustomers = async(req, res, next) => {
  const { toBeRemove } = req;
  const usersWithHospital = [];
  toBeRemove.map(async hospital => {
    const getUsers = await HospitalService.getUsers([ hospital.id ]);
    usersWithHospital.push(getUsers);
  });
  const fields = [ 'SN', 'Name', 'email', 'phone number' ];
  const data = usersWithHospital.map(
    (
      {
        name,
        email,
        phone_number,
      }, index,
    ) => ({
      SN: index + 1,
      Name: name,
      email,
      'phone number': phone_number,

    }),
  );
  const genCsv = Helper.toCSV({ fields, data });
  const fileName = `hospital-${new Date().getTime()}.csv`;
  const filePath = Helper.writeToFile({ fileName, content: genCsv });
  const emailData = {
    name: 'admin',
    email: [ 'fred@casava.co', 'ejiro@casava.co' ],
  };
  const attachments = [
    {
      content: await Helper.fileGetContent(filePath),
      filename: fileName,
      type: 'text/csv',
      disposition: 'attachment',
    },
  ];
  MailService('Customers hospital', 'hospital_customers', emailData, [], [], attachments);
  Helper.deleteFile(filePath);
  req.hospitalUsers = usersWithHospital;
  return next();
};

export const sendCustomersEmail = async(req, res, next) => {
  const { hospitalUsers } = req;
  hospitalUsers.map(email => {
    const data = {
      email: email.email,
      name: email.name,
      link: `${config.INSURANCE_URL}auth/login/`,
    };
    MailService('Change hospital', 'change_hospital', data);
    return email;
  });
  return next();
};

export const removeHospitals = async(req, res, next) => {
  const { toBeRemove } = req;
  toBeRemove.map(async hospital => {
    await HospitalService.removeHospital([ hospital.id ]);
  });
  return next();
};

export const addHospitals = async(req, res, next) => {
  const { newHospitals } = req;
  newHospitals.map(async hospital => {
    const hospitalPayload = HospitalPayload.createHospital(hospital);
    const exists = await HospitalService.getHospital(hospitalPayload.slug);
    if (!exists) {
      await HospitalService.addHospitals(hospitalPayload);
    }
  });
  return next();
};
