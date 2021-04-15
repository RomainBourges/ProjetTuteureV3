import * as React from "react"
import { useAuth } from "../context/auth"
import { useState } from 'react'
import { useEffect } from 'react'
import List from "./List"
import { ReactComponent as PlusIcon } from '../assets/plus.svg'



function MenuLists(props){
  const user=useAuth()
  const [listInfos, setInformations] = useState("");
  const [newListeTitle, setNewListTitle] = useState("");
  const [error, setError] = useState("");

  useEffect( () => {
    async function request(){
      let parameters = new URLSearchParams()
      parameters.append("IdUser",user.authTokens.IdUser);

      const options = {
        method: 'POST',
        body: parameters
      }
      const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/get_lists', options)
      const data = await reponse.json()
      
      if(reponse.status === 200){
        setInformations(data.lists)
        
      }else{
        setError(data.message)
        console.log(data.message)
      }
    }
    request()
  }, [])

    async function addList(e){
      e.preventDefault()
      let parameters = new URLSearchParams()
      parameters.append("IdUser",user.authTokens.IdUser)
      parameters.append("Title", newListeTitle)

      const options = {
        method: 'POST',
        body: parameters
      }
      const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/add_list', options)
      const data = await reponse.json()

      if(reponse.ok){
        console.log("reponse :",reponse)
      console.log("data :",data)
      }else{

      }
    }
    
    return ( 
      <div id="menu-lists">
          <span className="title">Mes listes</span>
          <ul>
            {
              json2array(listInfos).map((listInfo, index) => 
                <li key={index}><List listInfos={listInfo}/></li>
            )
            }

          </ul>
          <a href="" id="menu-new-list" title="Nouvelle liste" onClick={(e)=>{e.preventDefault()}}><PlusIcon />Nouvelle liste</a>
          <form action="/">
            <input type="text" name="Title" onChange={(e)=>{setNewListTitle(e.target.value)}}></input>
            <button type="submit" onClick={addList} >
            Ajouter
            </button>
          </form>
      </div>
      
      )
  }



  function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}

export default MenuLists;