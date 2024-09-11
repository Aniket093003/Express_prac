import express from "express";

const app = express();

const users = [
  {
    name: "aniket",
    fever: [
      {
        health: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  const anifever = users[0].fever;
  const number = anifever.length;
  let healthy = 0;
  for (let i = 0; i < anifever.length; i++) {
    if (anifever[i].health) {
      healthy += 1;
    }
  }
  const unHealthy = number - healthy;
  res.json({
    number,
    healthy,
    unHealthy,
  });
});

app.post("/", (req, res) => {
    const ishealthy = req.body.ishealthy;
    users[0].fever.push({
      health: ishealthy,
    });
    res.json({
      msg: "done!",
    });
  });
  
  
 
app.listen(3000);
