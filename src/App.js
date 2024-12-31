import { MovieList } from "./movieList";
import Navbar from "./Navbar";
import { Component } from "react";
import { movies } from "./moviesData.js";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  handleIncStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].stars >= 5) {
      return;
    }
    movies[mid].stars += 0.5;
    this.setState({
      movies: movies,
    });
  };

  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].stars <= 0) {
      return;
    }
    movies[mid].stars -= 0.5;
    this.setState({
      movies: movies,
    });
  };

  cartInHandle = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    // console.log(movies[mid].cart);
    // console.log(cartCount);
    movies[mid].cart = !movies[mid].cart;
    if (movies[mid].cart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }
    // console.log("After change", cartCount);

    this.setState({ movies, cartCount });
    // this.setState({ movies: movies });
  };

  favBtnChg = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].fav) {
      movies[mid].fav = false;
    } else {
      movies[mid].fav = true;
    }
    this.setState({ movies: movies });
  };
  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <h1>This is my movie app</h1>
        <MovieList
          movies={movies}
          addStars={this.handleIncStar}
          subtractstars={this.handleDecStar}
          favchange={this.favBtnChg}
          cartHandle={this.cartInHandle}
        />
      </>
    );
  }
}

export default App;
