import * as React from "react"
import { useAuth } from "../context/auth"
import { useState } from 'react'
import { useEffect } from 'react'
import List from "./List"
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import { json2array } from "../utils"



function MenuLists(props){
  const user=useAuth()
  const [first, setFirst] = useState(true);
  const [listInfos, setInformations] = useState("");
  const [error, setError] = useState("");

  /*if(first){
    request()
      setFirst(false)
  }
  async function request(){
    let parameters = new URLSearchParams()
    parameters.append("IdUser",user.authTokens.IdUser);

    const options = {
      method: 'POST',
      body: parameters
    }
    const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/get_lists', options)
    const data = await reponse.json()
    {console.log("data : ", data)}
    if(reponse.status === 200){
      setInformations(data.lists)

    }else{
      setError(data.message)
    }
  }*/
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
      //{console.log("data : ", data)}
      if(reponse.status === 200){
        setInformations(data.lists)

      }else{
        setError(data.message)
      }
    }
    request()
  }, [])

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
        <a href="/" id="menu-new-list" title="Nouvelle liste"><PlusIcon />Nouvelle liste</a>
    </div>

    )
  }


export default MenuLists;