import * as React from "react"
import { useState } from "react"
import { Redirect } from "react-router-dom"

function List(props){
  const [selected, setSelected] = useState(false);

  return ( 
            <a href={`/home/${props.listInfos.IdList}`} title="" >{props.listInfos.Title}<div className="badge">10</div></a>
    )
  }

export default List;