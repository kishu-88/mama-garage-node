
const Router = require("express").Router();
const { renderUserIndex } = require("../controller/userside/usersideController");

Router.route("/").get(renderUserIndex);

module.exports = Router;