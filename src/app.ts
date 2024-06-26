import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './module/product/product.route';
import { OrderRoutes } from './module/order/order.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

// app.use((error: any, req: Request, res: Response, next: NextFunction) => {
//     if(error) {
//         res.status(400).json({
//             "success": false,
//             "message": "Route not found"
//            })
//     }
// });

//route not found
app.all("*", (req, res)=>{
    res.status(400).json({
        "success": false,
        "message": "Route not found"
       })
})

export default app;
