export function setSelectedList (value) {
    return {
       type: "SET_SELECTED_LIST",
       value: value
    }
}

export function setSelectedTask(value){
    return {
        type: "SET_SELECTED_TASK",
        value: value
     }
}

export function setLists(value){
    return {
        type: "SET_LISTS",
        value: value
     }
}

export function setTasks(value){
    return {
        type: "SET_TASKS",
        value: value
     }
}

export function setSteps(value){
    return {
        type: "SET_STEPS",
        value: value
     }
}


