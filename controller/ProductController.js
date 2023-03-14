import Product from "../models/ProductModels.js";
import {Op} from "sequelize";

export const getProduct = async(req, res)=>{
    const page = parseInt(req.query.page)||0;
    const limit = parseInt(req.query.limit)||5;
    const search = req.query.search_query|| "";
    const offset = limit * page;
    const totalRows = await Product.count({
        where:{
            [Op.or]:[{name:{
                [Op.like]:'%'+search+'%'
            }},
        {categori:{
            [Op.like]:'%'+search+'%'
        }}]
        }
    });
    const totalPage =Math.ceil(totalRows / limit);
    const result = await Product.findAll({
        where:{
            [Op.or]:[{name:{
                [Op.like]:'%'+search+'%'
            }},
        {categori:{
            [Op.like]:'%'+search+'%'
        }}]
        },
        offset: offset,
        limit:limit,
        order:[
            ['name','DESC']
        ]
    });
    res.json({
        result:result,
        page:page,
        limit:limit,
        totalRows:totalRows,
        totalPage:totalPage
    });
} 