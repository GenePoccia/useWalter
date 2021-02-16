const RESIDENTS = require("../residents/residents.json");
const aws = require("./awsQueries");

//Get list of residents, (Very bad, put this in DB)
const getResidents = () => {
  return RESIDENTS;
};

const sendNotification = async (object) => {
  //gets resident object from s3
  let residentObject = await aws.getS3Object(object);
  //push delivered notification to client object
  residentObject.packageDelivered = true;
  aws.pushS3Object(residentObject);
};

const checkLogin = async (form) => {
  let residentObject = await aws.getS3Object(form);
  return await {
    loginSuccess: validateLogin(form, residentObject),
    resident: residentObject,
  };
};

const validateLogin = (form, residentObject) => {
  console.log(form.unit, residentObject.unit);
  if (
    form.email === residentObject.userEmail &&
    form.password === residentObject.password
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  getResidents,
  sendNotification,
  checkLogin,
};
