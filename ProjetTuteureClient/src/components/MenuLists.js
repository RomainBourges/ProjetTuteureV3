import * as React from "react"
import { useAuth } from "../context/auth"
import { useState } from 'react'
import { useEffect } from 'react'
import List from "./List"
import { ReactComponent as PlusIcon } from '../assets/plus.svg'



function MenuLists(props){
  //const existingTokens = JSON.parse(localStorage.getItem("tokens"))
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
      if(newListeTitle){
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
          window.location.href = "/home"
        }
      }
      else{
        e.preventDefault()
      }
      
    
    }

    function displayLists () {
      if(listInfos !== null){
      return(
        json2array(listInfos).map((listInfo, index) => 
                  <li key={listInfo.IdList}><List listInfos={listInfo}/></li>
              )
        )
      }
    }
    
    return ( 
      <div id="menu-lists">
          <span className="title">Mes listes</span>
          <ul>
            {
              displayLists()
            }

          </ul>
          <a href="" id="menu-new-list" title="Nouvelle liste" onClick={(e)=>{e.preventDefault()}}><PlusIcon />Nouvelle liste</a>
          <form action="/home">
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