
import './App.css';
import react,{Component} from "react";
import Person from "./components/Person";
import dataPerson from "./data/index";
class App extends react.Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      index:0
    };
  }
  componentDidMount(){
    this.setState({
      data:dataPerson
    });
  }
  renderPerson=()=>{
    let position='';
    return this.state.data.map((e,index)=>{
      if(this.state.index==index){
          position="activeSlide";
      }
      if(this.state.index<index){
          position="prevSlide";
      }
      if(this.state.index>index){
          position="nextSlide";
      }
      if(this.state.index==0 && index==(this.state.data.length-1)){
          position="nextSlide";
      }
      if(this.state.index==(this.state.data.length-1) && index==0){
          position="prevSlide";
      }
        return <Person data={e} style={position} key={e.id} />;
      
    });
  }
  prevPerson=()=>{
    let indexTemp=this.state.index;
    if(indexTemp==0){
        indexTemp=this.state.data.length-1;
    }else{
      indexTemp--;
    }
    this.setState({
      index:indexTemp
    });
  }

  nextPerson=()=>{
    let indexTemp=this.state.index;
    if(indexTemp==this.state.data.length-1){
        indexTemp=0;
    }else{
      indexTemp++;
    }
    this.setState({
      index:indexTemp
    });
  }
 render(){
    const {data}=this.state;
    if(this.state.data.length==0){
       return (
        <div className="App">
           <div>Loading...</div>
        </div>
      );
    }else{
      return (
        <div className="App">
            <div className="container">
                <div className="button-left"><button onClick={()=>{this.prevPerson()}}>prev</button></div>
                    {this.renderPerson()}
                <div className="button-right"><button onClick={()=>{this.nextPerson()}}>next</button></div>
            </div>
        </div>
      );
    }
  }
}

export default App;
