import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { createPost } from '../redux/actions';
import Post from './Post';

const UnfinishedTasks = ({syncPosts}) => {

    const [tasks, setTasks] = useState(syncPosts)

    useEffect(() => {
        getLocalTodos()
    }, [])

    useEffect(() => {
        saveLocalTodos();
        setTasks(syncPosts);
    }, [syncPosts])

    useEffect(() => {
        saveLocalTodos();
        setTasks(tasks);
    }, [tasks])

    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(tasks))
    }

    const getLocalTodos = () => {

        if (localStorage.getItem("todos") === null){
            localStorage.setItem("todos", JSON.stringify([]));
        }
        else if (syncPosts.length == 0){           
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTasks(todoLocal);
        }
    }
    
    if (syncPosts.length == 0 || !tasks) {
        return 'No tasks yet'
    }
    return (
        tasks.map(post => !post.completed && <Post post={post} overdue={post.overdue} completed={post.completed} key={post.id} timeToComplete={post.timeToComplete}/>)
    )
}


const mapStateToProps = state => {
    return {
        syncPosts: state.posts
    }
}

const mapDispatchToProps = {
    createPost: createPost
}

export default connect(mapStateToProps, mapDispatchToProps)(UnfinishedTasks)