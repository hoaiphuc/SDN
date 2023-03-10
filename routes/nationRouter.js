var express = require("express");
const bodyParser = require("body-parser");
const nationController = require("../controllers/nationController");
const nationRouter = express.Router();
nationRouter.use(bodyParser.json());
nationRouter
  .route("/")
  .get(nationController.index)
  .post(nationController.create);

nationRouter
  .route("/edit/:nationId")
  .get(nationController.formEdit)
  .post(nationController.edit);

nationRouter
    .route("/delete/:nationId")
    .get(nationController.delete);

module.exports = nationRouter;