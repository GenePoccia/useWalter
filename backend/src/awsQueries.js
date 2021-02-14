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

//get all packages list
const getS3Packages = async () => {
    let params = {
        Bucket: PACKAGE_BUCKET,
    }

    let packages = await s3.listObjects(params).promise()
    let allPackageKeys = packages.Contents.map(package => {
        return package.Key
    })

    return await getAllPackageObjects(allPackageKeys)
}

//another call to s3 to get package objects
const getAllPackageObjects = async (keys) => {
    let arr = [];
    for(let i = 0; i < keys.length; i++) {
        let obj = await s3.getObject({
            Bucket:PACKAGE_BUCKET,
            Key: keys[i]
        }).promise()
        arr.push(JSON.parse(obj.Body))
    }
    return arr
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
        Key: object.id.toString() + ".json",
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
    pushS3Package,
    getS3Packages
}