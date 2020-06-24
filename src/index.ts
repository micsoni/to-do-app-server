import express from "express";
import { router } from "./task/router";

const app = express();
const parser = express.json();

app.use(parser);
app.use(router);

app.listen(process.env.PORT || 4000, () =>
  console.log(`server running on port`)
);
