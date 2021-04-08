import * as React from "react"
export class MenuLists extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      idList:"",
      userId:"",
      title : "",
      description : "",
      createDate : "",
      error:""
    }
  } 

  render(){
    return ( <nav id="menu-lists">
                <span className="title">Mes listes</span>
                <ul>
                    <li><a href="/" title=""><div className="badge">25</div></a></li>
                    <li><a href="/" title=""><div className="badge">3</div></a></li>
                </ul>
                <a href="/" id="menu-new-list" title="Nouvelle liste">Nouvelle liste</a>
            </nav>
            
            )
  }
}

export default MenuLists;