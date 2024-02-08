import React, { Component } from "react";
import ValueCard from "./valueCard/valueCard";
const productsURL = "/api/product";
const userURL = "/api/user";

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (!this.state.stats) {
      return <div>Cargando...</div>;
    }
    return (
      <div className="card">
        <div className="card-body">
          <div className="d-flex ">
            <ValueCard
              title="Productos en DB"
              icon="bi bi-cart-fill"
              value={this.state.stats.product.length}
            />
            <ValueCard
              title="Generos en DB"
              icon="bi bi-file-earmark-fill"
              value={this.state.stats.genres.length}
              color="success"
            />
            <ValueCard
              title="Usuarios en DB"
              icon="bi bi-cart"
              value={this.state.users.cantUser}
              color="danger"
            />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.fetchStats();
    this.fetchUsers();
  }
  async fetchStats() {
    const result = await fetch(productsURL);
    const response = await result.json();
    console.log(response);

    this.setState({ stats: response });
  }

  async fetchUsers() {
    const result = await fetch(userURL);
    const response = await result.json();
    console.log(response);

    this.setState({ users: response });
  }
}

export default Stats;
