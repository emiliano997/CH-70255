import { productService } from "../services/product.service.js";

export const productRouter = Router();

productRouter.get("/", async (req, res) => {
  const products = await productService.getProducts();
  res.json(products);
});
