import { Component } from "react";
import MovieCard from "./moviecard.js";

export class MovieList extends Component {
  render() {
    // const { title, plot, price, rating, stars, fav, cart } = this.state;
    const { movies, addStars, subtractstars, favchange, cartHandle } =
      this.props;
    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            movi={movie}
            addStars={addStars}
            subtractstars={subtractstars}
            favchange={favchange}
            cartHandle={cartHandle}
            key={movie.id}
          />
        ))}
      </>
    );
  }
}
