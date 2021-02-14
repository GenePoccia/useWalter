const initializePackage = (resident) => {
    return {
        name: resident.name,
        unit: resident.unit,
        id: generatePackageID(),
        delivered: true,
        pickedUpByResident: false
    }
}

//Generates an ID for the package
const generatePackageID = function () {
    return Math.floor(Math.random() * 1000000000000);
  };

module.exports = {
    initializePackage
}