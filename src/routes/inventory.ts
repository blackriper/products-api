import { Product } from './../entity/Product';
import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';


const router = Router();

router.post("/newproduct", async (req, res, next) => {
    const { name, cant } = req.body;
    let sku = uuidv4()
    try {
        const newproduct = Product.create({ sku, name, cant })
        await newproduct.save()
        res.json({ "message": `Product with sku ${sku} created` })
    } catch (err) {
        next(err)
    }
})

router.get("/products", async (req, res, next) => {
    try {
        let products = await Product.find();
        res.json(products)
    } catch (err) {
        next(err)
    }
})

router.put("/updateproduct", async (req, res, next) => {

    try {
        const { sku, name, cant } = req.body;
        await Product.update({ sku }, { name, cant });
        res.json({ "message": `product ${sku} updated` })

    } catch (err) {
        next(err)
    }

})


router.put("/restcant", async (req, res, next) => {
    try {
        const { sku, cant } = req.body;
        await Product.update({ sku }, { cant });
        res.json({ "message": `product ${sku} cant updated` })
    } catch (err) {
        next(err)
    }
})


router.delete("/deleteproduct/:sku", async (req, res, next) => {
    try {
        await Product.delete(req.params.sku)
        res.json({ "message": `product ${req.params.sku} deleted` })

    } catch (err) {
        next(err)
    }

})


export default router