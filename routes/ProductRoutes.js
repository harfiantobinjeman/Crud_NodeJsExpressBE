import express from "express";

//panggil control
import { getProduct } from "../controller/ProductController.js";
const router = express.Router();

router.get('/products',getProduct);

export default router;