import React from 'react';
import FinishedTasks from './components/FinishedTasks';
import PostForm from './components/PostForm';
import UnfinishedTasks from './components/UnfinishedTasks';
import TodayTasks from './components/TodayTasks'



const App = () => {


  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col text-white bg-secondary">
          <div className="col" style={{paddingBottom: '10%'}}>
          <h2 className="card-header">Tasks for today</h2>
            <PostForm/>
          </div>
          <TodayTasks />
        </div>
        <div className="col text-dark bg-warning">
          <h2 className="card-header">Unfinished tasks</h2>
          <div className="col" style={{paddingBottom: '10%'}}>
            <PostForm/>
          </div>
          <UnfinishedTasks />
        </div>
        <div className="col text-dark bg-info">
          <h2 className="card-header">Finished tasks</h2>
          <FinishedTasks />
        </div>
      </div>
    </div>
  );
}

export default App;
