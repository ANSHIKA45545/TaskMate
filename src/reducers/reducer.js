const taskReducer =(state =[], action) => {
    switch(action.type){
        case ADD_TASKS:
            return [...state, action.payload];
        
        case DELETE_TASKS_TASKS:
            return state.filter(task => task.id !== action.payload);

        case EDIT_TASKS:
            return state.map(task => task.id === action.payload.id ? action.payload : task);

        default:
            return state;
    }
};