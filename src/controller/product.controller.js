import Product from "../model/product.model.js";

export const CreateProduct = async (req, res) => {
    try {
        console.log(req.body, "sdlkfhsdfk");
        const { productName, quandity, desciption } = req.body;
        console.log(productName, quandity, desciption);

        if (!productName || !quandity || !desciption) {
            res.json("all field is required!");
        }

        const alreadyProduct = await Product.findOne({ productName });
        if (alreadyProduct) {
            res.json({ success: false, message: "product already added." });
        }

        const product = new Product({ productName, quandity, desciption });
        await product.save();

        res.status(200).json({ success: true, message: "product created successfull" });

    } catch (error) {
        console.log("create product error", error.message);
    }
}

export const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id);
        const { productName, quandity, desciption } = req.body;

        if (!productName || !quandity || !desciption) {
            res.json("all field is required!");
        }

        const product = await Product.findById({_id: id});
        if(!product) {
            res.json({success: false, message: "product is not available"});
        }

        const bodyData = {
            productName:productName,
            quandity:quandity,
            desciption:desciption
        }

        const updateProduct = await Product.findByIdAndUpdate({id, bodyData}, {new: true})

        res.status(200).json({success: true, message: "product updated", product: updateProduct});

    } catch (error) {
        console.log("product update error", error.message);
    }
}

export const getProduct = async(req, res) => {
    try {
        const {id} = req.params;
        if(!id) {
            res.json("id is required");
        }
        const product = await Product.findById({_id: id});
        res.status(200).json({success: true, message: "get product", product: product});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const checkProduct = await Product.findById({_id: id});
        if(!checkProduct) {
            res.json("product is not available.");
        }
        await Product.findByIdAndDelete({_id: id});
        res.status(200).json({success: true, message: "product deleted"});
    } catch (error) {
        console.log("delete product error", error.message);
    }
}

export const softDelete = async(req, res) => {
    try {
        const {id} = req.params;
        if(!id) {
            res.json("id is required");
        }
        await Product.findByIdAndUpdate({_id: id, softDelete: true}, {new: true});
        res.status(200).json({success: true, message: "soft deleted product"});
    } catch (error) {
        console.log("softdelete product");
    }
}