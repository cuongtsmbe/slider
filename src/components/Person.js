
import react,{Component} from "react";
class Person extends react.Component {
 
 render(){
  const dataPerson=this.props.data;
    return (
      <>
        <article className={this.props.style}>
            <img src={dataPerson.image} alt="no image" />
            <h4>{dataPerson.name}</h4>
            <p className="job">{dataPerson.title}</p >
            <p>{dataPerson.quote}</p>
        </article>
      </>
    );
  }
}

export default Person;
