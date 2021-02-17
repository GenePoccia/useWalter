const aws = require("./awsQueries");

PACKAGE_BUCKET = "packages-walter-test";

const intializePackage = (resident) => {
  return {
    name: resident.resident,
    unit: resident.unit,
    id: generatePackageID(),
    delivered: true,
    pickedUpByResident: false,
  };
};

const pushPackageToDb = (object) => {
  let package = intializePackage(object);
  aws.pushS3Object(PACKAGE_BUCKET, package.id, package);
};

const getAllPackages = async () => {
  return await aws.getAllObjectsFromDb(PACKAGE_BUCKET);
};

const deletePackageFromDb = async (object) => {
  await aws.deleteObject(PACKAGE_BUCKET, object.packageId);
};

//Generates an ID for the package
const generatePackageID = function () {
  return Math.floor(Math.random() * 1000000000000);
};

module.exports = {
  pushPackageToDb,
  getAllPackages,
  deletePackageFromDb,
};
