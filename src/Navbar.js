import { Component } from "react";
// import styled from "styled-components";
import navstyle from "./nav.module.css";
// const Nav = styled.div`
//   background-color: #54cbec;
//   display: flex;
//   justify-content: space-between;
//   height: 70px;
//   font-size: 24px;
//   align-items: center;
//   padding: 10px;
// `;

// const Title = styled.div`
//   font-weight: bold;
//   &:hover {
//     color: green;
//   }
// `;
// const CartImg = styled.img`
//   height: 48px;
//   margin-right: 20px;
// `;

// const CartIconContainer = styled.div`
//   position: relative;
//   cursor: pointer;
// `;

// const CartCount = styled.div`
//   background: yellow;
//   border-radius: 50%;
//   padding: 4px 8px;
//   position: absolute;
//   right: 10px;
//   top: -5px;
//   font-size: 12px;
//   visibility: ${(props) => (props.show ? "visible" : "hidden")};
// `;

class Navbar extends Component {
  render() {
    const { cartCount } = this.props;
    return (
      <>
        <div className={navstyle.nav}>
          <div className={navstyle.title}>Movie App</div>
          <div className={navstyle.cartconcontainer}>
            <img
              className={navstyle.cartimg}
              src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
              alt="Cart Icon"
            />
            <div className={navstyle.cartcount}>
              <span>{cartCount}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
