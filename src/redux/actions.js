import { CREATE_POST, SHOW_ALERT, HIDE_ALERT, COMPLETE_POST, OVERDUE_POST } from "./types";

export function createPost(post) {
    
    return dispatch => {
        console.log(post)
        dispatch({
            type: CREATE_POST,
            title: post.title,
            id: post.id,
            date: post.date,
            completed: post.completed,
            timeToComplete: post.timeToComplete,
            overdue: post.overdue,
            changed: post.changed
        })

    if (post.timeToComplete > 0) {setTimeout(()=>{ 
            dispatch(overdueTask(post.id, post.date, post.changed))
        }, post.timeToComplete)} 
    else {setTimeout(()=>{ 
            dispatch(overdueTask(post.id, post.date, post.changed))
        }, 0)}
    }
}

export function completeTask(id){
    return {
            type: COMPLETE_POST,
            id: id
        }
}

export function overdueTask(id, date, changed){
    return  {
            type: OVERDUE_POST,
            id: id,
            date: date,
            changed: changed
    }        
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(()=>{
            dispatch(hideAlert())
        }, 3000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}
