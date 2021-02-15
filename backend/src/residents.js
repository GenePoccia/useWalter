const RESIDENTS = require("../residents/residents.json");
const aws = require("./awsQueries")

//Get list of residents, (Very bad, put this in DB)
const getResidents = () => {
  return RESIDENTS;
};

const sendNotification =  async (object) => {
  //gets resident object from s3
  let residentObject = await aws.getS3Object(object)
  //push delivered notification to client object
  residentObject.packageDelivered = true
  aws.pushS3Object(residentObject)
};


module.exports = {
  getResidents,
  sendNotification
};
