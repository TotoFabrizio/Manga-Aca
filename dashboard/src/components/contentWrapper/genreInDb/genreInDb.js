import React, { Component } from "react";
const lastProdURL = "/api/cantByGenre";

class GenreInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (!this.state.genreInDB) {
      return <div>Cargando...</div>;
    }
    return (
      <div className="card m-4" style={{ width: "18rem" }}>
        <div class="card-header">Cantidad por genero: </div>
        <div class="card-body">
            {
                this.state.genreInDB.genres.map((genre,index)=>{
                    return(
                        <div className="card text-white bg-dark d-flex m-1">
                            <h5 class="card-title m-2">{genre.genre + " " + this.state.genreInDB.cantPorGenre[index]}</h5>
                        </div>
                )})
            }
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

    this.setState({ genreInDB: response});
  }
}

export default GenreInDb;
