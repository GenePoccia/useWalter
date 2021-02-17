const getResidentQuery = (bucketName, unit) => {
  return {
    Bucket: bucketName,
    Key: `${unit}.json`,
  };
};

const getListOfPackagesQuery = (bucketName) => {
  return {
    Bucket: bucketName,
  };
};

const getListOfResidentsQuery = (bucketName) => {
  return {
    Bucket: bucketName,
  };
};

const getAllPackagesQuery = (bucketName, key) => {
  return {
    Bucket: bucketName,
    Key: key,
  };
};

const getAllResidentsQuery = (bucketName, key) => {
  return {
    Bucket: bucketName,
    Key: key.toString()
  };
};

const putResidentObjectQuery = (bucketName, residentObject) => {
  return {
    Bucket: bucketName,
    Key: `${residentObject.unit}.json`,
    Body: JSON.stringify(residentObject),
  };
};

const putPackageObjectQuery = (bucketName, packageObject) => {
  return {
    Bucket: bucketName,
    Key: packageObject.id.toString() + ".json",
    Body: JSON.stringify(packageObject),
  };
};

const deletePackageObjectQuery = (bucketName, id) => {
  return {
    Bucket: bucketName,
    Key: id.toString() + ".json",
  };
};

module.exports = {
  getResidentQuery,
  getListOfPackagesQuery,
  getAllPackagesQuery,
  putResidentObjectQuery,
  putPackageObjectQuery,
  deletePackageObjectQuery,
  getListOfResidentsQuery,
  getAllResidentsQuery
};
