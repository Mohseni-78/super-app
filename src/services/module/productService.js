import { Api_V1 } from "../config/main-axios";

class productService {
  getProducts() {
    return Api_V1.get("products/");
  }
}

export default new productService();
