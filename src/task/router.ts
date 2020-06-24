import express from "express";

const router = express.Router();

router.get("/task", function (req, res) {
  return res.json({task:"Hello"});
});

export { router };