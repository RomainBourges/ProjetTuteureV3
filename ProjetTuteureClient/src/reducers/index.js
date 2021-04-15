export default(state, action) => {
    switch(action.type){
        case 'SET_LIST':
            return {
                ...state,
                list: action.value
              };
            break;
        case 'SET_TASK':
            return {
                ...state,
                task: action.value
              };
        default:
            return state
    }
}