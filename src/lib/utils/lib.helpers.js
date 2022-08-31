import fsPath from 'path';
import { Parser } from 'json2csv';
import fs from 'fs-extra';
import defaultFs from 'fs';

export const generateUniquePassword = () => `${Math.random().toString(32).substr(2, 9)}`;

export const genUniqueCode = name => name.replace(/ /g, '-').toLowerCase();

export const toCSV = ({ fields, data }) => {
  const parser = new Parser({ fields });
  return parser.parse(data);
};

export const writeToFile = ({ content, fileName }) => {
  const path = `${__dirname}/../../../tmp/export/${fileName}`;
  fs.outputFileSync(path, content);
  return path;
};

export const deleteFile = (path) => {
  defaultFs.unlinkSync(path);
};

// eslint-disable-next-line no-async-promise-executor
export const base64EncodeFile = (file) => new Promise(async(resolve, reject) => {
  try {
    const bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    const base64Content = Buffer.from(bitmap).toString('base64');

    resolve(base64Content);
  } catch (err) {
    reject(err);
  }
});

// eslint-disable-next-line no-async-promise-executor
export const fileGetContent = (filePath) => new Promise(async(resolve, reject) => {
  try {
    const fileContent = fs
      .readFileSync(fsPath.resolve(filePath))
      .toString('utf8');

    resolve(fileContent);
  } catch (err) {
    console.log({ err4: err });
    reject(err);
  }
});
