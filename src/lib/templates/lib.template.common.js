/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import getTemplate from '.';

const heading = {
  change_hospital: 'Update On Your Chosen Primary Hospital',
  hospital_customers: 'Exported customer csv',
};

export const commonTemplate = (messageType, data, template) => {
  let headerText;
  switch (messageType) {
  case `${messageType}`:
    headerText = heading[messageType];
    break;
  default:
    headerText = '';
    break;
  }

  return messageType === 'general' ? getTemplate(messageType, data, template) : `
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
        
            <tr>
            <td style="padding:3px 30px 42px 30px;">
                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                    <tr>
                        <td style="color:#333333;">
                            <p style="margin:60px 0 12px 0;text-align: inherit; line-height:32px;font-family:Inter,sans-serif;">
                                Hello {{customer_name}},
                            </p>
                        </td>
                    </tr>
        
                    <tr>
                        <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                            <div style="font-family: inherit; text-align: inherit">
                                <div style="margin: 10px 0 12px 0">
                                    <div>
                                        Please be informed your premium payment for the month of {{month}} failed and we were unable to charge your card. 
                                        
                                        Kindly ensure to fund your account to enable payment of the policy. Your policy is at risk of being cancelled should 
                                        further debit attempts fail and your 2 week grace period elapses. 
                                        
                                    </div>
                                    <br>
                                </div>
                                <div>
                                    Thank you. <br>
                                    Need further help? Still send us an email hello@casava.co.or call us on 07025004444. 
                                </div>
                                <br>
                                <div>
                                    From your friends at Casava. <br>
                                    Insurance you enjoy.
                                </div>
                                <br>
                            <br>
                            </div>
                        </td>
                    </tr>
        
                    <tr>
                        <td style="margin: 20px 0 12px 0">
                            <div style="margin-bottom: 5px">Your Health Partner,</div>
                            <div>Funmi from Casava</div>
                        </td>
                    </tr>
                </table>
            </td>
            </tr>

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
                              &copy; 2022, Casava Microinsurance, All Rights Reserved
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
