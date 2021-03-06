import { CREATE_POST, COMPLETE_POST, OVERDUE_POST } from "./types";
import {load} from 'redux-localstorage-simple';

let initialState = load({ 
    states: ["posts"] ,
    namespace: "Tasks"
    });

if (!initialState || !initialState.posts || !initialState.posts.length) {
    initialState = {
        posts: []
    }
}

export const postsReducer = (state = initialState.posts, {type, title, id, date, completed, overdue, changed, timeToComplete}) => {
    switch (type) {
        case CREATE_POST:
            if (!changed) {return [...state, {
                title,
                id,
                date,
                completed,
                timeToComplete,
                overdue
            }]}
            return [...state].map((task)=>{
                if (task.id === id && !task.completed) {
                    task.title = title
                    task.id = id
                    task.date = date
                    task.completed = completed
                    task.timeToComplete = timeToComplete
                    task.overdue = overdue
                }
                return task     
        })
            
        case COMPLETE_POST: 

            return [...state].map((task)=>{
                if (task.id === id) {
                    task.completed = !task.completed;
                }
                return task
                
            })
        case OVERDUE_POST: 
            return [...state].map((task)=>{
                if (task.id === id && !task.completed && task.date && task.date === date) {
                    task.overdue = true;
                    task.completed = null
                } else if (task.changed) {task.overdue = false}
                return task     
        })
        default: return state
    }
}