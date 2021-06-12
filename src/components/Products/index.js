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
  };

  //funcion para actualizar los subtotales y el total de productos. Se reutiliza en componentDidMount() y en componentDidUpdate()
  updateProducts() {
    const { counters } = this.props;
    const { products } = this.state;

    //funcion auxiliar del map para calcular el subtotal de cada producto, devuelve un objeto product
    function updateSubtotal(product) {
      const counter = counters.find((element) => product.id === element.id);
      //si counter es undefined significa que el producto se borro, entonces devuelvo un undefined para poder filtrarlo despues del map
      //si counter existe, tengo que calcular el subtotal, que es igual a counter.value(cantidad) * precio(price)
      if (counter) {
        product.subtotal = counter.value * product.price;
      } else {
        product = undefined;
      }
      return product;
    }

    //array de productos con los subtotales actualizados. Filtro los productos borrados(lo que setee como undefined)
    const newProducts = products
      .map(updateSubtotal)
      .filter((product) => product !== undefined);

      //suma todos los subtotales, el valor inicial del acumulador lo seteo en 0
    const sumSubtotals = newProducts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.subtotal,
      0
    );

    //actualiza los productos y manda la suma de subtotales por callback
    this.setState({ products: newProducts }, this.props.handleTotal(sumSubtotals));
  }

  //inicializa los productos con sus subtotales
  componentDidMount() {
    this.updateProducts();
  }

  //cuando se actualiza counters hay que recalcular los subtotales
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
