import React from "react";
import './App.css';
import NavBar from "./components/Navbar";
import Counters from "./components/Counters";

class App extends React.Component {
  state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };

    //suma 1 a cada contador
    handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index]={...counter}; // clonamos el objeto recibido x parametro
      counters[index].value++;
      this.setState({counters});
     // console.log(this.state.counters[index]);
    };

    //
    handleDelete = (counterId) => {
      const counters = this.state.counters.filter((c) => c.id !== counterId);
      this.setState({ counters: counters });
    };

    handleReset = () => {
      const counters = this.state.counters.map((c) => {
        c.value = 0;
        return c;
      });
      this.setState({ counters });
    };

render(){
  const { counters } = this.state;
  
return (
  <React.Fragment>
  <NavBar totalCounters={counters.filter(c=> c.value>0).length} />
  <main className="container">
    <Counters 
    counters={counters}
    onReset={this.handleReset}
    onIncrement={this.handleIncrement}
    onDelete={this.handleDelete}
    />
  </main>
  </React.Fragment>
);
}
}
export default App;
