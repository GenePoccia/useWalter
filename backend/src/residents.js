const RESIDENTS = require("../residents/residents.json");
const aws = require("./awsQueries")

//Get list of residents, (Better: get from DB instead of locally)
const getResidents = () => {
  return RESIDENTS;
};

//Generates an ID for the package
let generatePackageID = function () {
  return Math.floor(Math.random() * 1000000000000);
};

const sendNotification =  async (unit) => {
  let residentObject = await aws.getS3Object(unit)
  let package = initializePackage(residentObject)

  residentObject.packages.push(package)
  aws.pushS3Object(residentObject)
};


const initializePackage = (resident) => {
    return {
        name: resident.name,
        unit: resident.unit,
        id: generatePackageID(),
        delivered: true,
        pickedUpByResident: false
    }
}
/*
Package structure:
name:
unit:
id:
delivered:
pickedUpByResident
*/
module.exports = {
  getResidents,
  sendNotification,
  generatePackageID,
};
