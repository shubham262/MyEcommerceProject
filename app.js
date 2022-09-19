const express = require(`express`);
const Categoryroutes = require("./routes/category.routes");
const {RoleRoute} = require(`./routes/role.route`)
const {sequelize} = require(`./models/index`)
// const 
const authRoutes = require(`./routes/auth.route`);
const Productroutes = require("./routes/Produt.routes");
const app = express();
const {Port} = require(`./config/ServerConfig`);
var  bodyParser = require('body-parser');
// const { sequelize } = require("./models/index");
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
Categoryroutes(app);
Productroutes(app);
authRoutes(app);
RoleRoute(app);
app.listen(Port,async()=>{
    await sequelize.sync() // for creating the User_roles table in mysql we use this ,as we cannt create models for this it is just for the Many relation between User and Roles
    console.log("Connection build Successfully");
})