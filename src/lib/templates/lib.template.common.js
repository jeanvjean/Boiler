/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import getTemplate from '.';

const heading = {
  change_hospital: 'Update On Your Chosen Primary Hospital',
  hospital_customers: 'Exported customer csv',
};

export const commonTemplate = (messageType, data) => {
  let headerText;
  switch (messageType) {
  case `${messageType}`:
    headerText = heading[messageType];
    break;
  default:
    headerText = '';
    break;
  }

  return `
  <!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="x-apple-disable-message-reformatting">
      <title></title>
      <!--[if mso]>
      <noscript>
          <xml>
              <o:OfficeDocumentSettings>
                  <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
          </xml>
      </noscript>
      <![endif]-->
      <style>
          table, td, div, h1, p {font-family: Inter, sans-serif;}
      </style>
  </head>
  <body style="margin:0;padding:0;">


<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
<tr>
    <td align="center" style="padding:0;">
        <table role="presentation" style="width:672px;border-collapse:collapse;border-spacing:0;text-align:left;">
            <tr>
                <td style="padding:0; background: #fff0f7; height:100px;">
                    <div style="margin-left: 30px;">
                        <img src="https://res.cloudinary.com/casava-insurance/image/upload/f_auto,q_auto/v1653401028/retool_email_image/casava_logo_yepjmk.png" alt=""/>
                        <b>${headerText}</b>
                    </div>
                </td>
            </tr>
        
        ${getTemplate(messageType, data)}

  <tr style="border-color: transparent; padding-top: 30px">
  <td style="">
      <table role="presentation" style="width:672px;border-collapse:collapse;border-spacing:0;text-align:left; margin: 0 auto;">
          <tr>
              <td style="padding:0;width:50%;" align="center">
                  <table role="presentation" style="padding: 32px;width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#660832;">
                      <tr>
                          <td style="padding:30px 0; line-height: 24px; color: #999999;font-family:Inter,sans-serif;">
                              <p style="text-align:center;font-size:12px; max-width: 480px;margin: 0 auto;font-family:Inter,sans-serif;">
                                  <a href="http://www.instagram.com/Gocasava"
                                    style="text-align: center;color:#ffffff;height: 32px;width: 32px;display:inline-block">
                                      <img style="margin: 0 auto;height:auto;padding-top: 10px;display:block;"
                                          src="https://res.cloudinary.com/casava-insurance/image/upload/f_auto,q_auto/v1653402425/retool_email_image/instagram_rrtsxx.png"
                                          alt="Instagram" />
                                  </a>

                                  <a href="http://www.twitter.com/Gocasava"
                                    style="text-align: center;color:#ffffff;height: 32px;width: 32px;display:inline-block">
                                      <img style="margin: 0 auto;height:auto;padding-top: 10px;display:block;"
                                          src="https://res.cloudinary.com/casava-insurance/image/upload/f_auto,q_auto/v1653402407/retool_email_image/twitter_jjlkok.png"
                                          alt="Twitter" />
                                  </a>

                                  <a href="https://wa.me/2349031233333"
                                    style="text-align: center;color:#ffffff;height: 32px;width: 32px;display:inline-block">
                                      <img style="margin: 0 auto;height:auto;padding-top: 10px;display:block;"
                                          src="https://res.cloudinary.com/casava-insurance/image/upload/f_auto,q_auto/v1653402438/retool_email_image/whatsapp_zub3sw.png"
                                          alt="Whatsapp" />
                                  </a>

                                  <a  href="http://www.facebook.com/Gocasava"
                                      style="height: 32px;width: 32px;border-radius:8px;display:inline-block;text-align: center">
                                      <img style="margin: 0 auto;height:auto;padding-top: 10px;display:block;"
                                          src="https://res.cloudinary.com/casava-insurance/image/upload/f_auto,q_auto/v1653402415/retool_email_image/facebook_pcrrbk.png"
                                          alt="Facebook" />
                                  </a>
                              </p>
                              <hr style="width: 136px;margin: 5px auto 25px auto;">

                              <div style="text-align:center;font-size:12px; max-width: 480px;margin: 0 220px;font-family:Inter,sans-serif; display: flex; justify-content: center;align-items: center;">
                                  <a href="#"
                                    style="margin-left: 36%; text-align: center;color:#999999;border-radius:8px;color:#ffffff; display:inline-block;text-decoration: none">
                                      Privacy Policy
                                  </a>
                              </div>

                              <p style="text-align:center;font-size:12px; max-width: 480px;margin: 0 auto; color: #ffffff">
                              &copy; ${new Date(new Date()).getFullYear()}, Casava Microinsurance, All Rights Reserved
                              </p>

                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
  </td>
  </tr>
        
  </body>
  </html>`;
};
