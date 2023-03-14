import express from "express";

//panggil control
import { getProduct,
    getAllProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
 } from "../controller/ProductController.js";
const router = express.Router();

router.get('/products',getProduct);
router.get('/productsAll',getAllProduct);
router.get('/products/:id',getProductById);
router.post('/products',createProduct);
router.patch('/products/:id',updateProduct);
router.delete('/products/:id',deleteProduct);

export default router;