import Product from "../models/Product.js";

// GET all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET single product by id
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) res.json(product);
        else res.status(404).json({ message: "Product not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREATE product
export const createProduct = async (req, res) => {
    try {
        const { name, price, description, image, countInStock } = req.body;
        const product = new Product({ name, price, description, image, countInStock });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE product by id
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            product.name = req.body.name || product.name;
            product.price = req.body.price || product.price;
            product.description = req.body.description || product.description;
            product.image = req.body.image || product.image;
            product.countInStock = req.body.countInStock || product.countInStock;

            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE product by id
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (product) {
            res.json({ message: "Product removed" });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addReview = async (req, res) => {
    try {
        const { rating, comment } = req.body;

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // check user already reviewed
        const alreadyReviewed = product.reviews.find(
            (r) => r.user.toString() === req.user._id.toString()
        );

        if (alreadyReviewed) {
            return res.status(400).json({ message: "You already reviewed this product" });
        }

        const review = {
            user: req.user._id,
            rating: Number(rating),
            comment,
        };

        // add review
        product.reviews.push(review);

        // update total reviews
        product.numReviews = product.reviews.length;

        // calculate average rating
        product.rating =
            product.reviews.reduce((acc, item) => acc + item.rating, 0) /
            product.numReviews;

        await product.save();

        res.status(201).json({ message: "Review added successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// ADD THIS FUNCTION
export const createReview = async (req, res) => {
    try {
        const { rating, comment } = req.body;

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
        };

        product.reviews.push(review);
        product.numReviews = product.reviews.length;

        product.rating =
            product.reviews.reduce((acc, item) => item.rating + acc, 0) /
            product.reviews.length;

        await product.save();

        res.status(201).json({ message: "Review added" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};