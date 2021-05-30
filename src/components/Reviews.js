import react,{Component} from "react";
import reviews from '../data/index';
class Reviews extends react.Component {
	constructor(props){
		super(props);
		this.state={
			person:reviews,
			index:1
		};
	}
	PersonPrev=()=>{
		if(this.state.index==0){
			this.setState({index:this.state.person.length-1});
		}else{
			this.setState({index:this.state.index-1});
		}

	}
	PersonNext=()=>{
		if(this.state.index===this.state.person.length-1){
			this.setState({index:0});
		}else{
			this.setState({index:this.state.index+1});
		}
	}
	render(){
		const {person,index}=this.state;
		return (
			<>	
				<h2><p>Reviews</p></h2>

						<div className="lineblue">
						</div>
	
				<div className="container">
					<div className="divImage">
						<div className="image">
							<img src={person[index].image} alt="no image" />
						</div>
					</div>
					
					<div className="name">
						<p>{person[index].name}</p>
					</div>
					<div className="job">
						<p>{person[index].job}</p>
					</div>
					<div className="text">
						<p>{person[index].text}</p>
					</div>

					<div className="buttonStep">
						<button onClick={()=>this.PersonPrev()}>&#8592;</button>&nbsp;<button onClick={()=>this.PersonNext()}>&#8594;</button>
					</div>
				</div>
			</>
			);
	}
} 

export default Reviews;