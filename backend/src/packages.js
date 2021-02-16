const aws = require("./awsQueries")

const intializePackage = (resident) => {
    return {
        name: resident.resident,
        unit: resident.unit,
        id: generatePackageID(),
        delivered: true,
        pickedUpByResident: false
    }
}

const pushPackageToDb = (object) => {
    let package = intializePackage(object)
    aws.pushS3Package(package)
}

const getAllPackages = async () => {
    return await aws.getS3Packages()
}

const deletePackageFromDb = async (object) => {
   await aws.deletePackage(object.packageId)
}

//Generates an ID for the package
const generatePackageID = function () {
    return Math.floor(Math.random() * 1000000000000);
};




module.exports = {
    pushPackageToDb,
    getAllPackages,
    deletePackageFromDb
}