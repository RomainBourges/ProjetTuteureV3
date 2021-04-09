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

  useEffect( async () => {
    let parameters = new URLSearchParams()

    const options = {
      method: 'POST',
      body: parameters
    }
    const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/get_lists', options)
    const data = await reponse.json()

    if(reponse.ok){
      setInformations(data.lists)
       
    }else{
      setError(data.message)
    }
  });    
    
  return ( 
    
    <nav id="menu-lists">
      {console.log(informations)}
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
    </nav>
    
    )
  }


export default MenuLists;