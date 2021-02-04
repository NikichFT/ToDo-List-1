import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { completeTask, createPost, overdueTask } from '../redux/actions';

const Post = ({post, completeTask, completed, overdue, changeTask, createPost, timeToComplete}) => {

    

    const getTime = (date) =>{
        const thisDate = new Date()

        if (date) {
            const thisYear = thisDate.getFullYear()
            const thisMonth = thisDate.getMonth()+1
            const thisDay = thisDate.getDate()
            const thisHour = thisDate.toString().split(' ')[4].split(':')[0]
            const thisMinute = thisDate.toString().split(' ')[4].split(':')[1]
            const thisSecond = thisDate.toString().split(' ')[4].split(':')[2]
            
            const secTask = Date.parse(`${date.split('T')[0].split('-').join('.')} ${date.split('T')[1]}`)
            const secThis = Date.parse(`${thisYear}.${thisMonth}.${thisDay} ${thisHour}:${thisMinute}:${thisSecond}`)
            const t = secTask-secThis;
            return t ? t : null
        }
    }  

    const [task, setTask] = useState({
        title: post.title,
        id: post.id,
        date: post.date,
        completed: post.overdue,
        overdue: post.overdue,
        timeToComplete: post.timeToComplete
    });

    //LocalStorage 
    useEffect(() => {
        getLocalTodos()
    }, [])

    useEffect(() => {
        saveLocalTodos();
        setTask(post);
    }, [post])

    useEffect(() => {
        saveLocalTodos();
        setTask(task);
    }, [task])

    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(task))
    }

    const getLocalTodos = () => {

       
        if (localStorage.getItem("todos") === null){
            localStorage.setItem("todos", JSON.stringify([]));
        }
        else if (post.length == 0){           
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTask(todoLocal);
            createPost(todoLocal);
        }
    }

    //обработка инпута
    const changeInputHandlerDate = event => {
        event.persist()
        createPost({
            title: post.title,
            id: post.id,
            [event.target.name]: event.target.value,
            completed: post.completed,
            overdue: task.overdue,
            timeToComplete: getTime(event.target.value),
            changed: true 
        });
        setTask({
            title: post.title,
            id: post.id,
            [event.target.name]: event.target.value,
            completed: post.completed,
            overdue: task.overdue,
            timeToComplete: getTime(event.target.value),
            changed: true 
        })

    }

    const changeInputHandlerTitle = event => {
        event.persist()
        createPost({
            [event.target.name]: event.target.value,
            id: post.id,
            date: post.date,
            completed: post.completed,
            overdue: task.overdue,
            timeToComplete: timeToComplete,
            changed: true 
        });
        setTask({
            [event.target.name]: event.target.value,
            id: post.id,
            date: task.date,
            completed: post.completed,
            overdue: task.overdue,
            timeToComplete: timeToComplete,
            changed: true 
        })

    }

    const changeInputHandlerCopy = event => {
        event.persist()
        createPost({
            title: task.title,
            id: Date.now().toString(),
            completed: !post.completed,
            overdue: false
        });
        setTask({
            title: task.title,
            id: Date.now().toString(),
            date: task.date,
            completed: !post.completed,
            overdue: false
        })

    }

    return (
        <div className={`card ${completed ? 'bg-success text-white' : 'bg-light text-dark'} mb-3`}>
            <div className={`card-body ${overdue && post.date  ? 'bg-danger' : ''}`} style={{textDecoration: completed ? 'line-through' : 'none' }}>
                <input type="text" value={post.title} name="title" onChange={(event)=>{changeInputHandlerTitle(event)}} className="form-control card-header"/>
                <div className="card-body">
                    <div className="card-text">complete before: </div>
                    <div className="col-10">
                            <input className="form-control" type="datetime-local" value={post.date} name="date" onChange={(event)=>{changeInputHandlerDate(event)}} id="datetime-local-input"/>
                    </div>  
            </div>                       
            </div>
            <div className="input-group-text"  style={{display: `${overdue && post.date ? 'none' : 'inline-block'}`}}>
                    <input className="form-check-input btn-outline-info" onClick={() => {completeTask(post.id)}} type="checkbox" defaultChecked={completed ? true : false} value="" aria-label="Checkbox for following text input"/>
            </div>
            {completed && <button name='completed' value='false' onClick={(event) => changeInputHandlerCopy(event)} type="button" className="btn btn-primary">Copy</button>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts,
        id: state.posts.id
    }
}

const mapDispatchToProps = {
    completeTask: completeTask,
    overdueTask: overdueTask,
    createPost: createPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)