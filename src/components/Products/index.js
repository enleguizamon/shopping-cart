import React from "react";
import "./style.css";

class Products extends React.Component {
  state = {
    products: [
      {
        id: 1,
        desc: "Tomates",
        price: 120,
        subtotal: 0,
      },
      {
        id: 2,
        desc: "Galletitas",
        price: 250,
        subtotal: 0,
      },
      {
        id: 3,
        desc: "Lata de Atún",
        price: 380,
      },
      {
        id: 4,
        desc: "Aquarius",
        price: 270,
        subtotal: 0,
      },
    ],
    total: 0,
  };

  updateProducts() {
    const { counters } = this.props;
    const { products } = this.state;

    function updateSubtotal(product) {
      const counter = counters.find((element) => product.id === element.id);
      product.subtotal = counter.value * product.price;

      return product;
    }
    const newProducts = products.map(updateSubtotal);
    this.setState({ products: newProducts });
  }

  componentDidMount() {
    this.updateProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.counters !== this.props.counters) {
      this.updateProducts();
    }
  }

  render() {
    const { products } = this.state;
    return (
      <div className="productsContainer">
        {products.map((item, key) => {
          return (
            <div className="productContainer" key={key}>
              <p>{item.desc}</p>
              <p>$ {item.price}</p>
              <p>$ {item.subtotal}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Products;
