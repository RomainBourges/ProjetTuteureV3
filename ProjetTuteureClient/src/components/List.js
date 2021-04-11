import * as React from "react"
import { useState } from "react"
import { Redirect } from "react-router-dom"
import { ReactComponent as DeleteIcon } from '../assets/delete.svg'

function List(props){
  const [selected, setSelected] = useState(false);

  return ( 
            <a href={`/home/${props.listInfos.IdList}`} title="" >{props.listInfos.Title}
            <div className="badge">{props.listInfos.FinishedTasks}/{props.listInfos.TotalTasks}</div>
            <DeleteIcon onClick={deleteList}/>
            </a>
            
    )

    async function deleteList(){
      let parameters = new URLSearchParams()
      parameters.append("IdList", props.listInfos.IdList);
  
      const options = {
      method: 'POST',
      body: parameters
      }
      const reponse = await fetch('http://localhost:80/ProjetTuteureServer/delete_list', options)
      const data = await reponse.json()
      if(reponse.status === 200){
        console.log(data)
      }
    }


}

export default List;