const getSingleObjectQuery = (bucketName, key) => {
  console.log('key', bucketName)
  return {
    Bucket: bucketName,
    Key: key.toString()
  };
};

const getListQuery = (bucketName) => {
  return {
    Bucket: bucketName,
  };
};

// const getAllObjectsQuery = (bucketName, key) => {
//   return {
//     Bucket: bucketName,
//     Key: key.toString(),
//   };
// };

const putObjectQuery = (bucketName, key, object) => {
  return {
    Bucket: bucketName,
    Key: key.toString() + ".json",
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
  deleteObjectQuery
};
