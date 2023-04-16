const express = require("express");

const router = express.Router();

const isAuth = require("../middleware/is-auth");
const shopController = require("../controllers/shop");

router.get("/collections", shopController.getCollections);

router.get("/cart", isAuth, shopController.getCarts);

router.put(
  "/collection/add/:collectionId",
  isAuth,
  shopController.addItemToCart
);

router.delete(
  "/collection/:collectionId",
  isAuth,
  shopController.clearItemFromCart
);

router.put(
  "/collection/remove/:collectionId",
  isAuth,
  shopController.removeFromCart
);

module.exports = router;
