const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCSS: true,
    formsCSS: true,
  });
};

exports.postAddProducts = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
  const product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};
