
import './App.css';
import Reviews from "./components/Reviews";
import react,{Component} from "react";
class App extends react.Component{

render(){
  return (
    <div className="App">
        <Reviews />
    </div>
  );
}
}

export default App;
