const ADD_TASKS ="ADD_TASK";
const DELETE_TASKS ="DELETE_TASK";
const EDIT_TASKS ="EDIT_TASK";

const addTask= (task) => ({type:ADD_TASKS, payload:task});
const deleteTask= (task) => ({type:DELETE_TASKS, payload:taskId});
const editTask= (task) => ({type:EDIT_TASKS, payload:task});