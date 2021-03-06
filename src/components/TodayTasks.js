import React from 'react';
import {connect} from 'react-redux';
import { createPost } from '../redux/actions';
import Post from './Post';

const TodayTasks = ({syncPosts}) => {

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
    
    if (syncPosts.length == 0) {
        return 'No tasks yet'
    }

    
    return (
        syncPosts.map(post =>{ 
            if (post.date) { return post.date.split('T')[0] == arrDate.join('-') && <Post post={post} overdue={post.overdue} completed={post.completed} key={post.id} timeToComplete={post.timeToComplete}/> }
            return <Post post={post} overdue={post.overdue} completed={post.completed} key={post.id} timeToComplete={post.timeToComplete}/>
        })
    )
}


const mapStateToProps = state => {
    return {
        syncPosts: [...state.posts.filter((post)=>{if (!post.completed) return post}).sort(function(a, b) { if (!a.overdue || !b.overdue) return a.timeToComplete - b.timeToComplete}),...state.posts.filter((post)=>{if (post.completed) return post})]
    }
}

const mapDispatchToProps = {
    createPost: createPost
}

export default connect(mapStateToProps, mapDispatchToProps)(TodayTasks)