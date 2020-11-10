import AWS from 'aws-sdk';

export default (person, address) => {
    // Set region
    AWS.config.update({region: 'ap-northeast-1'});

    // Create publish parameters
    const params = {
    Message: `${address}에서 ${person} 발견`, /* required */
    PhoneNumber: '+821022141322',
    };

    // Create promise and SNS service object
    const publishTextPromise = new AWS.SNS({apiVersion: 'latest'}).publish(params).promise();

    // Handle promise's fulfilled/rejected states
    publishTextPromise.then(
    function(data) {
        console.log("MessageID is " + data.MessageId);
    }).catch(
        function(err) {
        console.error(err, err.stack);
    });
}