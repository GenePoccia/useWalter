const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const paramBuilder = require("./paramBuilder");

const getSingleS3Object = async (bucket, key) => {
  let params = paramBuilder.getSingleObjectQuery(bucket, key);

  let residentObject = await s3.getObject(params).promise();
  return JSON.parse(residentObject.Body);
};

const getAllObjectsFromDb = async (bucket) => {
  //get list of all objects in a bucket
  let params = paramBuilder.getListQuery(bucket);
  let objects = await s3.listObjects(params).promise();

  //get each object from the bucket
  let allObjectKeys = objects.Contents.map((object) => {
    return object.Key;
  });

  return await pullAllObjectsFromDb(allObjectKeys, bucket);
};

const pullAllObjectsFromDb = async (keys, bucket) => {
  let arr = [];
  for (let i = 0; i < keys.length; i++) {
    //build query for each object
    let params = paramBuilder.getSingleObjectQuery(bucket, keys[i]);
    //get the object then push it to the array
    let obj = await s3.getObject(params).promise();
    arr.push(JSON.parse(obj.Body));
  }
  return arr;
};

const pushS3Object = (bucket, key, object) => {
  console.log("here", object);
  let params = paramBuilder.putObjectQuery(bucket, key, object);

  s3.putObject(params, function (err, data) {
    if (err) console.log(err);
    else console.log(data);
  });
};

const deleteObject = (bucket, id) => {
  let params = paramBuilder.deleteObjectQuery(bucket, id);

  s3.deleteObject(params, function (err, data) {
    if (err) console.log(err);
    else {
      return true;
    }
  });
};

module.exports = {
  getSingleS3Object,
  pushS3Object,
  getAllObjectsFromDb,
  deleteObject,
};
