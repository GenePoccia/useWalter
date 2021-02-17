const aws = require("./awsQueries");

RESIDENT_BUCKET = "walter-residents";

const getResidents = async () => {
  return await aws.getAllObjectsFromDb(RESIDENT_BUCKET);
};

const sendNotification = async (object) => {
  //gets resident object from s3 based off unit number
  let dbKey = object.unit + ".json";
  let residentObject = await aws.getSingleS3Object(RESIDENT_BUCKET, dbKey);
  //push delivered notification to client object
  residentObject.packageDelivered = true;
  aws.pushS3Object(RESIDENT_BUCKET, residentObject.unit, residentObject);
};

const checkLogin = async (form) => {
  let dbKey = form.unit + ".json";
  let residentObject = await aws.getSingleS3Object(RESIDENT_BUCKET, dbKey);
  return await {
    loginSuccess: validateLogin(form, residentObject),
    resident: residentObject,
  };
};

const validateLogin = (form, residentObject) => {
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
