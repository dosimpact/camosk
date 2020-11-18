import AWS from 'aws-sdk';

export default (person=null, address) => {
    // Set region
    AWS.config.update({region: 'ap-northeast-1'});

    // Create publish parameters
    let msg = ""
    if(person == null){
        msg = `${address}에서 ${person} 발견`
    } else {
        msg = `${address}에서 긴급/구조 요청`
    }
    const params = {
        Message: msg, /* required */
        PhoneNumber: '+821022141322',
    };
    // Create promise and SNS service object
    const publishTextPromise = new AWS.SNS({apiVersion: 'latest'})
    .publish(params).promise();

    // Handle promise's fulfilled/rejected states
    publishTextPromise.then(
    function(data) {
        console.log("MessageID is " + data.MessageId);
    }).catch(
        function(err) {
        console.error(err, err.stack);
    });
}