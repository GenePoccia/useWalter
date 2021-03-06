let express = require("express");
let app = express();
let multer = require("multer");
let upload = multer();
let cors = require("cors");
let residents = require("./src/residents");
let packages = require("./src/packages");
app.use(cors({ credentials: true, origin: "*" }));

//webapp endpoints
app.get("/residents", async (req, res) => {
  let residentList = await residents.getResidents();
  res.send({ body: residentList });
});

app.get("/get-packages", async (req, res) => {
  let packageList = await packages.getAllPackages();
  res.send({ body: packageList });
});

app.post("/delete-package", upload.none(), async (req, res) => {
  await packages.deletePackageFromDb(req.body);
});

app.post("/sendNotification", upload.none(), (req, res) => {
  //push package to packageDB for package list
  //push resident object to db to set delivered to true for notification
  residents.sendNotification(req.body);
  packages.pushPackageToDb(req.body);
});

//mobile endpoints
app.post("/login", upload.none(), async (req, res) => {
  let loginSuccess = await residents.checkLogin(req.body);
  res.send({ body: loginSuccess });
});

app.listen(4000, function () {
  console.log("listening on port 4000");
});
