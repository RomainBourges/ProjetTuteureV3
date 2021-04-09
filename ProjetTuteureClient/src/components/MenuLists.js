import * as React from "react"
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
        </ul>
        <a href="/" id="menu-new-list" title="Nouvelle liste">Nouvelle liste</a>
    </nav>
    
    )
  }


export default MenuLists;