let express = require("express");
let app = express();
let multer = require("multer");
let upload = multer();
let cors = require("cors");
let residents = require("./src/residents")
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use("/images", express.static(__dirname + "/images"));



app.get("/residents", (req, res) => {
  let residentList = residents.getResidents()
  res.send({body: residentList})
})

app.post("/sendNotification", upload.none(), (req, res) => {
  let packageID = residents.generatePackageID()
  //updates the user object to add the package in the database
  residents.sendNotification(req.body.unit, packageID)
})



app.listen(4000, function() {
  console.log("listening on port 4000");
});