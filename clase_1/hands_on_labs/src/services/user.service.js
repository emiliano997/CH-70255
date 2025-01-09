import { faker } from "@faker-js/faker";
import { productService } from "./product.service.js";

class UserService {
  users = [];

  constructor(users) {
    this.init(users);
  }

  async init(users) {
    for (let i = 0; i < users; i++) {
      const user = await this.generateMockUsers();
      this.users.push(user);
    }
  }

  async getUsers() {
    return this.users;
  }

  async generateMockUsers() {
    const products = [];
    const productsQuantity = Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < productsQuantity; i++) {
      const product = await productService.getRandomProduct();
      console.log(product);

      products.push(product);
    }

    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      premium: faker.datatype.boolean(),
      role: faker.datatype.boolean() ? "admin" : "user",
      birthDate: faker.date.birthdate(),
      phone: faker.phone.number(),
      products,
      image: faker.image.avatar(),
      id: faker.database.mongodbObjectId(),
      email: faker.internet.email(),
    };
  }
}

export const userService = new UserService(10);
