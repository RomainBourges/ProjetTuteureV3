export default(state, action) => {
    switch(action.type){
        case 'SET_LISTS':
            return {
                ...state,
                lists: action.value
              };
            break;
        case 'SET_TASKS':
            return {
                ...state,
                tasks: action.value
              };
              case 'SET_STEPS':
                return {
                    ...state,
                    steps: action.value
                  };
        default:
            return state
    }
}