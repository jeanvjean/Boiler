import request from 'request';
import * as config from '../config/setup';

export const sendSMS = (payload) => {
  try {
    const data = {
      to: payload.to,
      from: config.SENDER_ID,
      sms: payload.message,
      type: 'plain',
      api_key: config.DEV.SMS_SERVICE_API_KEY,
      channel: 'generic',
    };
    const options = {
      method: 'POST',
      url: `${config.SMS_SERVICE_URL}/api/sms/send`,
      headers: {
        'Content-Type': [ 'application/json', 'application/json' ],
      },
      body: JSON.stringify(data),
    };
    request(options, (error, response) => {
      if (error) { throw new Error(error); }
      console.log({ response: response.data });
    });
  } catch (error) {
    console.log(error);
  }
};
