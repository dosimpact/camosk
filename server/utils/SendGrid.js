import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export const sendEmail = (email) => {
  return sgMail.send(email);
};

export const sendSecretMail = (adress, content) => {
  const email = {
    to: adress,
    from: "ypd03008@naver.com",
    subject: "Camosk 알리미",
    text: `Camosk 입니다.  :  ${content} 감사합니다.`,
    html: `Camosk 입니다.<br/>  :  <strong>${content}</strong><br/> 감사합니다.`,
  };
  return sendEmail(email);
};
