import { Sequelize } from "sequelize";

import db from "../config/Database.js";

const {DataTypes} = Sequelize;
const Product = db.define('products',{
    name:DataTypes.STRING,
    categori:DataTypes.STRING,
    descrip:DataTypes.STRING
},{
    freezeTableName:true
});

export default Product;

//migration auto
(async()=>{
    await db.sync();
})();