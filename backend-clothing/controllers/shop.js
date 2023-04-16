const Collection = require("../models/collections");
const User = require("../models/user");

exports.getCollections = async (req, res, next) => {
  try {
    const collections = await Collection.find();
    if (!collections) {
      const error = new Error("Collections could not found");
      error.statusCode = 404;
      throw error;
    }
    res
      .status(200)
      .json({ message: "Fetch successfully", collections: collections });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getCarts = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      const error = new Error("User could not found");
      error.statusCode = 404;
      throw error;
    }
    const cartData = user.cart.items;
    res.status(200).json({ cart: cartData });
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addItemToCart = async (req, res, next) => {
  let collectionId = req.params.collectionId;
  try {
    const collection = await Collection.findOne({
      "items._id": collectionId,
    });
    const productFetch = collection.items.find((cp) => {
      return cp._id.toString() === collectionId;
    });
    if (!productFetch) {
      const error = new Error("Product could not found");
      error.statusCode = 404;
      throw error;
    }
    const user = await User.findById(req.userId);
    if (!user) {
      const error = new Error("User could not found");
      error.statusCode = 404;
      throw error;
    }
    let newUser = await user.addToCart(productFetch);
    res.status(201).json({ newCart: newUser.cart.items });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.removeFromCart = async (req, res, next) => {
  const collectionId = req.params.collectionId;
  try {
    const collection = await Collection.findOne({
      "items._id": collectionId,
    });
    const productFetch = collection.items.find(
      (cp) => cp._id.toString() === collectionId
    );
    if (!productFetch) {
      const error = new Error("Product could not found");
      error.statusCode = 404;
      throw error;
    }
    const user = await User.findById(req.userId);
    if (!user) {
      const error = new Error("User could not find");
      error.statusCode = 404;
      throw error;
    }
    let newUser = await user.removeFromCart(productFetch);
    res.status(201).json({ newCart: newUser.cart.items });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.clearItemFromCart = async (req, res, next) => {
  const collectionId = req.params.collectionId;
  try {
    const collection = await Collection.findOne({ "items._id": collectionId });
    const productFetch = collection.items.find(
      (cp) => cp._id.toString() === collectionId
    );
    if (!productFetch) {
      const error = new Error("Product could not found");
      error.statusCode = 404;
      throw error;
    }
    const user = await User.findById(req.userId);
    if (!user) {
      const error = new Error("User could not find");
      error.statusCode = 404;
      throw error;
    }
    const newUser = await user.clearFromCart(productFetch);
    res.status(200).json({ newCart: newUser.cart.items });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
