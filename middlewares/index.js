import express from "express";

const app = express();

export function ageCheckMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 18) {
    next();
  } else {
    res.json({
      msg: "You cannot vote",
    });
  }
}

app.get("/Vote1", ageCheckMiddleware, (req, res) => {
  res.json({
    msg: "1. Voting is done",
  });
});
app.get("/Vote2", ageCheckMiddleware, (req, res) => {
  res.json({
    msg: "2. Voting is done",
  });
});

app.listen(3000);