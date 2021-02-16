const getResidentQuery = (bucketName, unit) => {
    return {
        Bucket: bucketName,
        Key: `residents/${unit}.json`
    }
}

const getListOfPackagesQuery = (bucketName) => {
    return {
        Bucket: bucketName
    }
}

const getAllPackagesQuery = (bucketName, key) => {
    return {
        Bucket: bucketName,
        Key: key
    }
}

const putResidentObjectQuery = (bucketName, residentObject) => {
    return {
        Bucket: bucketName,
        Key: `resident/${residentObject.unit}.json`,
        Body: JSON.stringify(residentObject)
    }
}

const putPackageObjectQuery = (bucketName, packageObject) => {
    return {
        Bucket: bucketName,
        Key: packageObject.id.toString() + '.json',
        Body: JSON.stringify(packageObject)
    }
}

const deletePackageObjectQuery = (bucketName, id) => {
    return {
        Bucket: bucketName,
        Key: id.toString() + '.json'
    }
}

module.exports = {
    getResidentQuery,
    getListOfPackagesQuery,
    getAllPackagesQuery,
    putResidentObjectQuery,
    putPackageObjectQuery,
    deletePackageObjectQuery
  };