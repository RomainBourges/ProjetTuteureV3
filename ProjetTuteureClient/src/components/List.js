import * as React from "react"
import { useState } from "react"
import { ReactComponent as DeleteIcon } from '../assets/delete.svg'

import store from "../store";

function List(props){

  return ( 
            <a href="/" title="" onClick={dispatchSelectedList} >{props.listInfos.Title}
              <div className="badge">{props.listInfos.FinishedTasks}/{props.listInfos.TotalTasks}</div>
              <DeleteIcon onClick={deleteList}/>
            </a>
            
    )

    function setSelectedList (value) {
      return {
         type: "SET_LIST",
         value: value
       }
    }
  
    function dispatchSelectedList(e) {
      e.preventDefault()
      const list = props.listInfos;
      store.dispatch(setSelectedList(list));
    }

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