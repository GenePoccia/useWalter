const AWS = require('aws-sdk')
const s3 = new AWS.S3()

BUCKET_NAME = "residents-test"
PACKAGE_BUCKET = "packages-walter-test"

//get a resident object
const getS3Object = async (unit) => {
    let params = {
        Bucket: BUCKET_NAME,
        Key: `residents/${unit}.json`
       };

    let residentObject = await s3.getObject(params).promise()
    return JSON.parse(residentObject.Body);
}

//push a resident object with updated package details (for notification purposes)
const pushS3Object = (object) => {
    let params = {
        Bucket: BUCKET_NAME,
        Key: `residents/${object.unit}.json`,
        Body: JSON.stringify(object)
    }

    s3.putObject(params, function(err, data){
        if(err) console.log(err)
        else console.log(data)
    })
}

//Push package to the package DB for admin purposes
//TODO: Add a layer of abstraction to eliminate doubling of s3.putObject() 
const pushS3Package = (object) => {
    let params = {
        Bucket: PACKAGE_BUCKET,
        Key: object.id,
        Body: JSON.stringify(object)
    }

    s3.putObject(params, function(err, data){
        if(err) console.log(err)
        else console.log(data)
    })
}

module.exports = {
    getS3Object,
    pushS3Object,
    pushS3Package
}