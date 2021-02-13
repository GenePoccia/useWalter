let express = require("express");
let app = express();
let multer = require("multer");
let upload = multer();
let cors = require("cors");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use("/images", express.static(__dirname + "/images"));



app.get("/", (req, res) => {
        res.send("hello");
});


app.listen(4000, function() {
  console.log("listening on port 4000");
});