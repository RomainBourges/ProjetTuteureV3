import * as React from "react"
import { useState } from "react"
import { Redirect } from "react-router-dom"

function List(props){
  const [selected, setSelected] = useState(false);

  return ( 
            <li><a href={`/home/${props.informations.IdList}`} title="" >{props.informations.Title}<div className="badge">10</div></a></li>
    )
  }

export default List;