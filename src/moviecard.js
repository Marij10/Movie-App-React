import React from "react";

export class MovieCard extends React.Component {
  render() {
    const { title, plot, price, rating, stars, fav, cart, src } =
      this.props.movi;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="poster" src={src} />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"
                  className="str-btn"
                  onClick={() => this.props.subtractstars(this.props.movi)}
                />
                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                  className="stars"
                />
                <img
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/32/32563.png"
                  className="str-btn"
                  // onClick={this.addstars.bind(this)}
                  onClick={() => this.props.addStars(this.props.movi)}
                />
                <span>{stars}</span>
              </div>
              {fav ? (
                // <button onClick={this.favchange} className="unfavourite-btn">
                <button
                  onClick={() => this.props.favchange(this.props.movi)}
                  className="unfavourite-btn"
                >
                  Un-Favourite
                </button>
              ) : (
                <button
                  onClick={() => this.props.favchange(this.props.movi)}
                  className="favourite-btn"
                >
                  Favourite
                </button>
              )}

              {cart ? (
                <button
                  onClick={() => this.props.cartHandle(this.props.movi)}
                  className="unfavourite-btn"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => this.props.cartHandle(this.props.movi)}
                  className="cart-btn"
                >
                  Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
