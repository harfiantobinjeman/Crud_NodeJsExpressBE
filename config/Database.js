import { Sequelize } from "sequelize";

const db = new Sequelize('mandiri_test','root', '',{
    host:"localhost",
    dialect:"mysql"
});

export default db;