import React, { Component } from "react";
const productsURL = "/api/product";

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
      <div>lalala</div>
    );
  }
  componentDidMount() {
    this.fetchStats();
  }
  async fetchStats(){
    const result = await fetch(productsURL);
    const response = await result.json();
    console.log(response)

    this.setState({ stats: response });
  }
}

export default Stats;
