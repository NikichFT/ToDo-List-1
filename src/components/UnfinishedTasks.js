import React from 'react';
import {connect} from 'react-redux';
import { createPost } from '../redux/actions';
import Post from './Post';

const UnfinishedTasks = ({syncPosts}) => {
    
    if (syncPosts.length == 0) {
        return 'No tasks yet'
    }
    return (
        syncPosts.map(post => !post.completed && <Post post={post} overdue={post.overdue} completed={post.completed} key={post.id} timeToComplete={post.timeToComplete}/>)
    )
}


const mapStateToProps = state => {
    return {
        syncPosts: [...state.posts.sort(function(a, b) { return a.timeToComplete - b.timeToComplete})]
    }
}

const mapDispatchToProps = {
    createPost: createPost
}

export default connect(mapStateToProps, mapDispatchToProps)(UnfinishedTasks)