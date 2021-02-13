const AWS = require('aws-sdk')
const s3 = new AWS.S3()

BUCKET_NAME = "residents-test"

const getS3Object = async (unit) => {
    let params = {
        Bucket: BUCKET_NAME,
        Key: `residents/${unit}.json`
       };

    let residentObject = await s3.getObject(params).promise()
    return JSON.parse(residentObject.Body);
}

const pushS3Object = (object) => {
    let params = {
        Bucket: BUCKET_NAME,
        Key: `residents/${object.unit}.json`,
        Body: JSON.stringify(object)
    }
    console.log('putting object back')
    s3.putObject(params, function(err, data){
        if(err) console.log(err)
        else console.log(data)
    })
}

module.exports = {
    getS3Object,
    pushS3Object
}