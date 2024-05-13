
// function CoreConcept(props){    //Method1 of calling props
//       return (
//       <li>
//         <img src={props.image} alt={props.title} />
//         <h3>{props.title}</h3>
//         <p>{props.description}</p>
//       </li> 
//       )
//     }
    
    

export default function CoreConcept({ image, title, description }) {  //shorter method

    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  
  }
  