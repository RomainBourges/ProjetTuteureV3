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
      const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/get_lists', options)
      const data = await reponse.json()

      if(reponse.ok){
        console.log(data.lists)
        //setInformations(data.lists)
        
      }else{
        console.log(data.lists)
        //setError(data.message)
      }
    }
    request()
  }, [])   
    
  return ( 
    <div id="menu-lists">
      {console.log('iformations',informations)}
      {console.log('error',error)}
      {console.log('user',user)}
        <span className="title">Mes listes</span>
        <ul>
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </ul>
        <a href="/" id="menu-new-list" title="Nouvelle liste"><PlusIcon />Nouvelle liste</a>
    </div>
    
    )
  }


export default MenuLists;