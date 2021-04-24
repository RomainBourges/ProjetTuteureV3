import { useDispatch } from "react-redux";

export function json2array(json){
    var result = [];
        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });
    return result;

    

}

export async function updateSteps(idTask){
    let parameters = new URLSearchParams()
    parameters.append("IdTask", idTask);

    const options = {
        method: 'POST',
        body: parameters
    }
    const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/get_steps', options)
    const data = await reponse.json()
    if(reponse.status === 200){
        //setSteps(data.steps)
    }else{
    }
}

export async function updateTasks(idList){
    if(idList){
        //setError("")
        let parameters = new URLSearchParams()
        parameters.append("IdList", idList);
  
        const options = {
          method: 'POST',
          body: parameters
        }
        
        const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/get_tasks', options)
        
        const data = await reponse.json()
        if(reponse.status === 200){
          useDispatch(setTasks(data.tasks))
          //setTasksInfos(data.tasks)
          //setError(data.message)
        }
        else{
          //setError(data.message)
          //setTasksInfos("")
        }
    }
}

export async function updateLists(idUser){
    let parameters = new URLSearchParams()
      parameters.append("IdUser", idUser);

      const options = {
        method: 'POST',
        body: parameters
      }
      const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/get_lists', options)
      const data = await reponse.json()
      
      if(reponse.status === 200){
        //setInformations(data.lists)
      }else{
      }
}