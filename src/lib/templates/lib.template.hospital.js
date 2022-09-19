/* eslint-disable max-len */

export const change_hospital = data => `
<tr>
    <td style="padding:3px 30px 42px 30px;">
        <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
            <tr>
                <td style="color:#333333;">
                    <p style="margin:60px 0 12px 0;text-align: inherit; line-height:32px;font-family:Inter,sans-serif;">
                        Hello ${data.name},
                    </p>
                </td>
            </tr>

            <tr>
                <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                    <div style="font-family: inherit; text-align: inherit">
                        <div style="margin: 10px 0 12px 0">
                            <div>
                                In line with ensuring that you enjoy great value for your premium, we’ve had to retire a few of our partner hospitals.
                            </div>
                            <br>
                            <div>
                                However, retiring them doesn’t mean you would be left without a primary hospital. On the contrary, we have partnered with more
                                hospitals that would provide premium services to match your premium subscription. That way, you can keep enjoying sweet healthcare.
                            </div>
                            <br>
                        </div>

                        <div style="margin: 20px 0 12px 0">
                            <div>
                               - Kindly update your primary hospital by following the steps below; <br>
                               - Click this link <a href="${data.link}">HERE</a> to visit your dashboard. <br>
                               - Choose a new hospital that suits you and your needs. <br>
                               - Once you’ve chosen a hospital, It will be automatically updated on your dashboard. <br>
                               - View your new health card on your dashboard and print if you wish.  <br>
                                <br>
                                Remember to always reach out to us to make an appointment before visiting the hospital. Either via email hello@casava.co or via whatsapp on 07025004444.
                            </div>
                            </br>
                            <div>
                                Once again, thank you for trusting us to go with you on your journey to good healthcare. <br>

                                For further enquiries, please send an email to hello@casava.co or you can call  07025004444.
                            </div>
                            <br>
                        </div>
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
`;

export const hospital_customers = data => `
<tr>
    <td style="padding:3px 30px 42px 30px;">
        <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
            <tr>
                <td style="color:#333333;">
                    <p style="margin:60px 0 12px 0;text-align: inherit; line-height:32px;font-family:Inter,sans-serif;">
                        Hello ${data.name},
                    </p>
                </td>
            </tr>

            <tr>
                <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content">
                    <div style="font-family: inherit; text-align: inherit">
                        <div style="margin: 10px 0 12px 0">
                            <div>
                                Exported file attachment.
                            </div>
                            <br>
                        </div>
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
`;

export const failed_payment = data => `
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
`;

export const general_template = (data, template) => template.replace(/{name}/g, data.name).replace(/{date}/g, data.date);
