import * as React from "react"
import { useAuth } from "../context/auth"
import { useState } from 'react'
import { useEffect } from 'react'
import List from "./List"
import { ReactComponent as PlusIcon } from '../assets/plus.svg'



function MenuLists(props){
  //const existingTokens = JSON.parse(localStorage.getItem("tokens"))
  const user=useAuth()
  
  const [informations, setInformations] = useState("");
  const [error, setError] = useState("");

  useEffect( () => {
    async function request(){
      let parameters = new URLSearchParams()
      parameters.append("IdUser",user.authTokens.IdUser);

      const options = {
        method: 'POST',
        body: parameters
      }
      const reponse = await fetch('http://localhost:80/ProjetTuteureServer/get_lists', options)
      const data = await reponse.json()

      if(reponse.status === 200){
        setInformations(data.lists)
        
      }else{
        setError(data.message)
      }
    }
    request()
  }, [informations])   

  function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}
    
  return ( 
    <div id="menu-lists">
        <span className="title">Mes listes</span>
        <ul>
          {
            json2array(informations).map(information => 
              <List informations={information}/>
          )
          }

        </ul>
        <a href="/" id="menu-new-list" title="Nouvelle liste"><PlusIcon />Nouvelle liste</a>
    </div>
    
    )
  }


export default MenuLists;