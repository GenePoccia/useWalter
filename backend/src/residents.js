const RESIDENTS = require("../residents/residents.json");
const aws = require("./awsQueries")

//Get list of residents, (Better: get from DB instead of locally)
const getResidents = () => {
  return RESIDENTS;
};

const sendNotification =  async (object) => {
  let residentObject = await aws.getS3Object(object.unit)
  //push delivered notification to client object
  residentObject.packageDelivered = true
  aws.pushS3Object(residentObject)
};


module.exports = {
  getResidents,
  sendNotification
};
