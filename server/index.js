const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, createGoal, getSuperpower, getGift, deleteGoal, backEndCross } = require('./controller.js')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/createGoal/", createGoal);
app.get("/api/superpower", getSuperpower);
app.get("/api/gift", getGift);
app.delete("/api/deleteGoal/:deleteThisGoal", deleteGoal);
app.put("/api/crossOutGoal/:crossThisGoal", backEndCross);

app.listen(4000, () => console.log("Server running on 4000"));
