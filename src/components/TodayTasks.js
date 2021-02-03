import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { createPost } from '../redux/actions';
import Post from './Post';

const TodayTasks = ({syncPosts}) => {

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
            createPost(todoLocal);
        }
    }

    const thisDate = new Date()


    const thisYear = thisDate.getFullYear()
    const thisMonth = thisDate.getMonth()+1
    const thisDay = thisDate.getDate()


    let date = [thisYear, thisMonth, thisDay];

    let arrDate = date.map((item) => {
        if(item > 0 && item < 10) {
            return item = '0'+item
        } return item
    })
    
    if (syncPosts.length == 0 || !tasks) {
        return 'No tasks yet'
    }
    return (
        tasks.map(post =>{ 
            if (post.date) { return post.date.split('T')[0] == arrDate.join('-') && !post.completed && <Post post={post} overdue={post.overdue} completed={post.completed} key={post.id} timeToComplete={post.timeToComplete}/> }
            return !post.completed && <Post post={post} overdue={post.overdue} completed={post.completed} key={post.id} timeToComplete={post.timeToComplete}/>
        })
    )
}


const mapStateToProps = state => {
    return {
        syncPosts: [...state.posts.sort(function(a, b) { if (!a.overdue || !b.overdue) return a.timeToComplete - b.timeToComplete})]
    }
}

const mapDispatchToProps = {
    createPost: createPost
}

export default connect(mapStateToProps, mapDispatchToProps)(TodayTasks)