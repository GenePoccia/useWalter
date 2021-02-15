let express = require("express");
let app = express();
let multer = require("multer");
let upload = multer();
let cors = require("cors");
let residents = require("./src/residents")
let packages = require('./src/packages')
app.use(cors({ credentials: true, origin: "*" }));

//webapp endpoints
app.get("/residents", (req, res) => {
  let residentList = residents.getResidents()
  res.send({body: residentList})
})

app.get("/get-packages", async (req, res) => {
  let packageList = await packages.getAllPackages()
  res.send({body: packageList})
})

app.post("/sendNotification", upload.none(), (req, res) => {
  //push package to packageDB and set packageDelivered to true for resident for notification
  residents.sendNotification(req.body)
  packages.pushPackageToDb(req.body)
})

//mobile endpoints
app.post("/login", upload.none(), (req, res) => {

})



app.listen(4000, function() {
  console.log("listening on port 4000");
});