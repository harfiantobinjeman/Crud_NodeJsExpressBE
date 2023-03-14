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

export const getAllProduct = async(req, res)=>{
    try {
        const response = await Product.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
export const getProductById = async(req, res)=>{
    try {
        const response = await Product.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createProduct = async(req, res)=>{
    try {
        await Product.create(req.body);
        res.status(201).json({msg:"Product di Bertambah"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateProduct = async(req, res)=>{
    try {
        await Product.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg:"Product di Ubah"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProduct = async(req, res)=>{
    try {
        await Product.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg:"Product di Hapus"});
    } catch (error) {
        console.log(error.message);
    }
}