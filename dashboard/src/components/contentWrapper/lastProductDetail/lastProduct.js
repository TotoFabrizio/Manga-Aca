import React, { Component } from "react";
const lastProdURL = "/api/lastproduct";

class LastProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (!this.state.product) {
      return <div>Cargando...</div>;
    }
    return (
      <div className="card m-4" style={{ width: "18rem" }}>
        <img
          src={`http://localhost:3000${this.state.product.img}`}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{this.state.product.volProd.title}</h5>
          <p class="card-text">
            {this.state.product.volProd.description}
          </p>
          <a href={`/edit/${this.state.product.id}`} class="btn btn-primary">
            Edit
          </a>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.fetchProduct();
  }
  async fetchProduct() {
    const result = await fetch(lastProdURL);
    const response = await result.json();
    console.log(response);

    this.setState({ product: response.lastProd });
  }
}

export default LastProduct;
