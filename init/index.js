const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/WonderList";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    //converting new object to prev object
    initData.data = initData.data.map((obj)=>({...obj,owner: "67fe73727f12a89a6085022d"}));
    await Listing.insertMany(initData.data);
    console.log("data initailized");

}

initDB();