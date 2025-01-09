import { faker } from "@faker-js/faker";

class ProductService {
  products = [];

  constructor(products) {
    for (let i = 0; i < products; i++) {
      const product = this.generateMockProduct();
      this.products.push(product);
    }
  }

  async getProducts() {
    return this.products;
  }

  async getQuantityProducts() {
    return this.products.length;
  }

  async getRandomProduct() {
    const randomIndex = Math.floor(Math.random() * this.products.length);
    return this.products[randomIndex];
  }

  generateMockProduct() {
    return {
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      code: faker.string.alphanumeric(6),
      price: faker.commerce.price(),
      department: faker.commerce.department(),
      stock: faker.number.int({ max: 50 }),
      id: faker.database.mongodbObjectId(),
      image: faker.image.urlLoremFlickr(),
    };
  }
}

export const productService = new ProductService(10);
