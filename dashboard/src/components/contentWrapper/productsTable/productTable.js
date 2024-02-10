import React, { Component } from "react";
const productsURL = "/api/product";

class ProductsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (!this.state.products) {
      return <div>Cargando...</div>;
    }
    return (
        <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Titulo</th>
            <th scope="col">Precio</th>
            <th scope="col">Volumen</th>
            <th scope="col">URL Imagen</th>
          </tr>
        </thead>
        <tbody>
            {this.state.products.map((product)=>{
              return(
                <tr>
                <th scope="row">{product.id}</th>
                <td>{product.volProd.title}</td>
                <td>{product.volProd.price}</td>
                <td>{product.volume}</td>
                <td>{product.img}</td>
                </tr>
              )  
            })}
        </tbody>
      </table>
    );
  }
  componentDidMount() {
    this.fetchProducts();
  }
  async fetchProducts() {
    const result = await fetch(productsURL);
    const response = await result.json();
    console.log(response.product);

    this.setState({ products: response.product });
  }
}

export default ProductsTable;
