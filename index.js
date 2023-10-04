const express = require("express");
const mongoose = require("mongoose");

const app = express();

// mongoose.connect("mongodb+srv://mamamotorparts:mamamotor2080parts@cluster0.tfaud3s.mongodb.net/?retryWrites=true&w=majority").then(() => {
//     console.log("Database connected successfully.");
// }).catch((error) => {
//     console.error("Error connecting to the database:", error);
// });


app.set("view engine","ejs");

app.use(express.static("public/"))

//routes  here
const usersideRoutes = require("./routes/userSideRoutes");
app.use("",usersideRoutes);

app.listen(3000,()=>{
    console.log("listening on port 3000")
})