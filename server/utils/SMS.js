import AWS from "aws-sdk";
const config = new AWS.Config({
  accessKeyId: process.env.AWS_SNS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SNS_SECRET_ACCESS_KEY,
  region: "ap-southeast-2",
}); // AWS 설정
AWS.config = config;
AWS.config.update({
  region: "ap-northeast-1",
});

// Handle promise's fulfilled/rejected states
export const sendSMS = async (Message, PhoneNumber) => {
  const params = { Message, PhoneNumber };
  // Create promise and SNS service object
  const publishTextPromise = new AWS.SNS({ apiVersion: "latest" })
    .publish(params)
    .promise();

  try {
    await publishTextPromise
      .then(function (data) {
        console.log("MessageID is " + data.MessageId);
      })
      .catch(function (err) {
        console.error(err, err.stack);
      });
  } catch (error) {}
};
