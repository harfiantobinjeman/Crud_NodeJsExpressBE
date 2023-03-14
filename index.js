import express  from "express";
import cors from "cors";
import ProductRoutes from "./routes/ProductRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductRoutes);


app.listen('5000',()=> console.log('Server Up and Runing....'))