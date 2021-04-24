export default(state, action) => {
    switch(action.type){
      case 'SET_LISTS':
          return {
              ...state,
              lists: action.value
            };
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
      case 'SET_SELECTED_LIST':
        return {
            ...state,
            selectedList: action.value
          };
      case 'SET_SELECTED_TASK':
        return {
            ...state,
            selectedTask: action.value
          };
      default:
          return state
    }
}