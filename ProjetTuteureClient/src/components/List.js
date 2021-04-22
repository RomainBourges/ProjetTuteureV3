import * as React from "react"
import { useState } from "react"
import { ReactComponent as DeleteIcon } from '../assets/delete.svg'

import store from "../store";

function List(props){
  const [selected, setSelected] = useState(false);

  return ( 
            <a href="/" title="" onClick={dispatchSelectedList} >{props.listInfos.Title}
              <div className="badge">{props.listInfos.FinishedTasks}/{props.listInfos.TotalTasks}</div>
              <DeleteIcon onClick={deleteList}/>
            </a>
            
    )

    function setSelectedList (value) {
      return {
         type: "SET_LISTS",
         value: value
       }
    }
  
    function dispatchSelectedList(e) {
      console.log("store list avant :", store.getState().lists)
      e.preventDefault()
      const list = props.listInfos.IdList;
      store.dispatch(setSelectedList(list));
      console.log("store list après :", store.getState().lists)
    }

    async function deleteList(){
      let parameters = new URLSearchParams()
      parameters.append("IdList", props.listInfos.IdList);
  
      const options = {
      method: 'POST',
      body: parameters
      }
      const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/delete_list', options)
      const data = await reponse.json()
      if(reponse.status === 200){
        console.log(data)
      }
    }


}

export default List;