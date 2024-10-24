import { Request, Response } from "express";
import Product from "../models/Product.model";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            order: [
                ['id', 'DESC'] // Ordenar po id de forma descendiente
            ],
            //attributes: { exclude: ['createdAt', 'updatedAt', 'availability'] } // para excluir algunos campos
            attributes: { exclude: ['createdAt', 'updatedAt'] }
            //limit: 3
        });
        res.json({ data: products });
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (req: Request, res: Response): Promise< any> => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado'})
        }

        res.json({data: product})
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = async (req: Request, res: Response): Promise<any> => {
    
    try {
        //const product = new Product(req.body);
        //const savedProduct = await product.save();

        const product = await Product.create(req.body);
        res.json({ data: product })
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' })
        }

        // Actualizar
        await product.update(req.body);
        await product.save();

        res.json({data: product})
    } catch (error) {
        console.log(error);
    }
}

export const updateAvailability = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' })
        }

        // Actualizar
        //await product.update(req.body);
        product.availability = !product.dataValues.availability;
        await product.save();

        res.json({ data: product })
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' })
        }

        await product.destroy();
        res.json({ data: 'Producto eliminado' });

    } catch (error) {
        console.log(error);
    }
}