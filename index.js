const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/messages",(req, res) => {
	let m = ["It takes courage to grow up and become who you really are.",
  "Your self-worth is determined by you. You don't have to depend on someone telling you who you are.",
  "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
  "Setting goals is the first step in turning the invisible into the visible.",
  "A witty woman is a treasure; a witty beauty is a power.",
  "The most difficult thing is the decision to act; the rest is merely tenacity.",
  "Education is the most powerful weapon which you can use to change the world."];
	let r = parseInt(Math.random() * m.length);
	res.send({"msg" : m[r]});
	res.end();
});

app.listen(9000, () => {console.log("ready @ 9000"); });