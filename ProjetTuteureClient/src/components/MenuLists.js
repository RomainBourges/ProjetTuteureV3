import * as React from "react"
<<<<<<< HEAD
//export class MenuLists extends React.Component {
  import { useState } from "react"

function MenuLists(props){
  const [idList, setIdList] = useState(null)
  const [userId, setUserId] = useState(null)
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [createDate, setCreateDate] = useState(null)
  const [error, setError] = useState(null)

  return ( 
    <nav id="menu-lists">
        <span className="title">Mes listes</span>
        <ul>
            <li><a href="/" title="">qzhefvbkuqzgefkqgzefkgqziefgqizegfiqzgefiuqgzeiqgefig<div className="badge">25</div></a></li>
            <li><a href="/" title=""><div className="badge">3</div></a></li>
=======
import { useAuth } from "../context/auth"
import { useState } from 'react'
import { useEffect } from 'react'
import List from "./List"


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
    const reponse = await fetch('http://localhost:80/ProjetTuteureServer/get_lists', options)
    const data = await reponse.json()

    if(reponse.ok){
      setInformations(data.lists)
       
    }else{
      setError(data.message)
    }
  });    
    
  return ( 
    <nav id="menu-lists">
      {console.log(user.authTokens.Email)}
        <span className="title">Mes listes</span>
        <ul>
        {console.log(informations)}
>>>>>>> 92023ad5697cf7bf39cb93c9798b8ce9077bebd9
        </ul>
        <a href="/" id="menu-new-list" title="Nouvelle liste">Nouvelle liste</a>
    </nav>
    
    )
  }


export default MenuLists;