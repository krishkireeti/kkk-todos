import { initialState } from "./initial-state";
import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED, TOGGLE_IMPORTANT } from "./actions";

import shortid from "shortid";


console.log(initialState);

function saveStateToBrowser(state){
   window.localStorage.setItem("kkk-todos", JSON.stringify(state));
}

function reducer(state = initialState, action) {
    switch(action.type){
        case ADD_TODO: {
            const { title } = action.payload;

            const newState = {
                ...state,
                todos: [
                    ...state.todos,
                   {
                     id: shortid(),
                     title,
                     completed: false,
                     important : false
                   }
                ],
            }

            saveStateToBrowser(newState);

        return newState;
        }

       case TOGGLE_COMPLETED: {
           const newtodos = state.todos.map(todo => {
               if(todo.id === action.payload.id){
                   todo.completed = !todo.completed;
               }
               return todo;
           });

           const newState = {
                 ...state,
                 todos: newtodos,
           };
        
           saveStateToBrowser(newState);

         return newState;
        }

        case DELETE_TODO : {
           const { id } = action.payload;

           const newTodos = state.todos.filter((todo) => todo.id !== id);

           const newState = {
               ...state,
               todos: newTodos,
           };

           saveStateToBrowser(newState);

           return newState;
        }

        case TOGGLE_IMPORTANT: {
            const newtodos = state.todos.map(todo => {
                if(todo.id === action.payload.id){
                    todo.important = !todo.important;
                }
                return todo;
            });
 
            const newState = {
                  ...state,
                  todos: newtodos,
            };
         
            saveStateToBrowser(newState);

          return newState;
         }

        default:
         return state;
    }
}

export default reducer;