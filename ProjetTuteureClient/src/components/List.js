import * as React from "react"
import { useState } from "react"
import { Redirect } from "react-router-dom"

function List(props){
  const [selected, setSelected] = useState(false);

  function handleClick(e)  {
      e.preventDefault()
    setSelected(true)
  }
    
  if(selected){
    return (
        <Redirect to={`/home/${props.informations.idList}`}/>
      )
  }
  return ( 
            <li><a href="/" title="" onClick={handleClick} >{props.informations.title} <div className="badge"></div></a></li>
    )
  }

export default List;