const AWS = require('aws-sdk')
const s3 = new AWS.S3()

const paramBuilder = require('./paramBuilder')

BUCKET_NAME = "residents-test"
PACKAGE_BUCKET = "packages-walter-test"

//get a resident object
const getS3Object = async (object) => {
    let params = paramBuilder.getResidentQuery(BUCKET_NAME, object.unit)
    
    let residentObject = await s3.getObject(params).promise()
    return JSON.parse(residentObject.Body);
}

//get all packages list
const getS3Packages = async () => {
    //get list of all packages
    let params = paramBuilder.getListOfPackagesQuery(PACKAGE_BUCKET)
    let packages = await s3.listObjects(params).promise()
    
    //get each package object
    let allPackageKeys = packages.Contents.map(package => {
        return package.Key
    })

    return await getAllPackageObjects(allPackageKeys)
}

//another call to s3 to get package objects
//Not ideal to do with S3 since multiple calls have to be made
//SQL DB would be good here?

const getAllPackageObjects = async (keys) => {
    let arr = [];
    for(let i = 0; i < keys.length; i++) {
        //build query for each package
        let params = paramBuilder.getAllPackagesQuery(PACKAGE_BUCKET, keys[i])
        //get a single package
        let obj = await s3.getObject(params).promise()
        arr.push(JSON.parse(obj.Body))
    }
    return arr
}

//push a resident object with updated package details (for notification purposes)
const pushS3Object = (object) => {
    let params = paramBuilder.putResidentObjectQuery(BUCKET_NAME, object)

    s3.putObject(params, function(err, data){
        if(err) console.log(err)
        else console.log(data)
    })
}

//Push package to the package DB for admin purposes
const pushS3Package = (object) => {
    let params = paramBuilder.putPackageObjectQuery(PACKAGE_BUCKET, object)

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