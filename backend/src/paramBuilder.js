//Typscript objects:
// bucketname and key would have type string
// object would have type any

const getSingleObjectQuery = (bucketName, key) => {
  return {
    Bucket: bucketName,
    Key: key.toString(),
  };
};

const getListQuery = (bucketName) => {
  return {
    Bucket: bucketName,
  };
};

const putObjectQuery = (bucketName, key, object) => {
  return {
    Bucket: bucketName,
    Key: key.toString(),
    Body: JSON.stringify(object),
  };
};

const deleteObjectQuery = (bucketName, id) => {
  return {
    Bucket: bucketName,
    Key: id.toString() + ".json",
  };
};

module.exports = {
  getSingleObjectQuery,
  getListQuery,
  putObjectQuery,
  deleteObjectQuery,
};
