const API = {
  getProducts: async () => {
    // let Products = [];
    return await fetch("https://fakestoreapi.com/products")
    .then((res) =>
      res.json()
    );
  },

  getCategory: async () => {
    // let Category = [];
    return await fetch("https://fakestoreapi.com/products/categories")
    .then(
      (res) => res.json()
    );
  },
  sort: async () => {
    return await fetch("https://fakestoreapi.com/products?sort")
    .then(
      (res) => res.json()
    );
  },
  asc: async () => {
    return await fetch("https://fakestoreapi.com/products?sort")
    .then(
      (res) => res.json()
    );
  }
};
export default API;
