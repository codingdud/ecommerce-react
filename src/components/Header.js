/**
 * fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Header = ({ setSelectedCategory, selectedCategory }) => {
  const [data, setData] = useState([]);

  /**
   * useEffect -> sync our application with external system
   *
   */
  useEffect(() => {
    // code is wriitern inside useEffect is run everytime the component renders
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(selectedCategory);

  let isLoading = false;
  let loadError = null;

  if (isLoading) {
    return <div>Data is Loading ...</div>;
  } else if (loadError) {
    return (
      <div>Oops there seems to be an error. Please try again later ...</div>
    );
  } else {
    return (
      <div className="header-items">
        {data.map((category) => (
          <div
            onClick={() => setSelectedCategory(category)}
            className={
              "header-item " +
              (category === selectedCategory ? "header-item-selected" : "")
            }
            key={category}
          >
            {category}
          </div>
        ))}
        <div className="shopping-items">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span style={{ marginLeft: 5 }} className="cart-length"></span>
        </div>
      </div>
    );
  }
};
export default Header;
