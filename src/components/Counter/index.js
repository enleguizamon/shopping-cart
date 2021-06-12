import React, { Component } from "react";

class Counter extends Component {
  //si el contador tiene un valor diferente al anterior, lo actualiza
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
    }
  }

  //funcion para cambiar la clase
  getBadgesClasses() {
    const { counter } = this.props;
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  //funcion para mostrar el valor del contador numerico
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Cero" : value;
  }

  render() {
    const { onIncrement, onDelete, counter } = this.props;

    return (
      <div>
        <span className={this.getBadgesClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Incrementar
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
