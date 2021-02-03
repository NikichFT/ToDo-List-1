import React from 'react';
import {connect} from 'react-redux';
import { createPost, showAlert } from '../redux/actions';
import { Alert } from './Alert';

const mapStateToProps = state => ({
    todos: state.posts.posts,
    alert: state.app.alert
})

class PostForm extends React.Component {

    state = {
        title: '',
        date: undefined,
        completed: false,
        overdue: false,
    }

    submitHandler = event => {
        event.preventDefault()

        if (!this.state.title.trim()){
            return this.props.showAlert('You are trying to create an empty task')
        }

        const thisDate = new Date()

        const getTime = (date) =>{
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
        const newPost = {
            title: this.state.title,
            id: Date.now().toString(),
            date: this.state.date,
            completed: false,
            overdue: false,
            timeToComplete: getTime(this.state.date) 
        }

        this.props.createPost(newPost)
        
        this.setState({title: ''}) 

    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
               {this.props.alert && <Alert text={this.props.alert}/>}
                <div className="form-group">
                    <label htmlFor="title">Task Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                    <label htmlFor="datetime-local-input" className="col-form-label">Date and time</label>
                    <div className="col-10">
                        <input className="form-control" onChange={this.changeInputHandler} type="datetime-local" value={this.state.date} name="date" id="datetime-local-input"/>
                    </div>
                </div>    
                <button className="btn btn-success" type="submit">Add</button>
            </form>
        )
    }

}
const mapDispatchToProps = {
    createPost, showAlert
}


export default connect(mapStateToProps, mapDispatchToProps)(PostForm)