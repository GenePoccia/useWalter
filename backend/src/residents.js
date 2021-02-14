const RESIDENTS = require("../residents/residents.json");
const aws = require("./awsQueries")
const packages = require('./packages')

//Get list of residents, (Better: get from DB instead of locally)
const getResidents = () => {
  return RESIDENTS;
};

const sendNotification =  async (unit) => {
  let residentObject = await aws.getS3Object(unit)
  let package = packages.initializePackage(residentObject)

  residentObject.packages.push(package)
  aws.pushS3Object(residentObject)
};


module.exports = {
  getResidents,
  sendNotification
};
