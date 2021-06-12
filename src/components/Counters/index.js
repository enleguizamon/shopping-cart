import React, { Component } from "react";
import Counter from "../Counter";
import "./style.css";

class Counters extends Component {
  render() {
    const { counters, onReset, onDelete, onIncrement } = this.props;
    
    return (
      <div className="counters">
        <button
          onClick={onReset}
          className="brn btn-primary btn-sm m-2 mb-3"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
