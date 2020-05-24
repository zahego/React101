import React from 'react';
import ReactDOM from 'react-dom';
class MountingLifeCycle extends React.Component{
    constructor(){
        //called before component is mounted. What the hell is mounted thou?
        //best place to initialize state
    }
    static getDerivedStateFromProps(){
        //should be static and shit
        //invoke right after component is constructed
    }
    render(){
        //called when first mount
        //called when new props come in, see in UpdateLifeCycle
        //when setState is called
        return(<></>)
    }
    componentDidMount(){
        //right after component is mounted
        //good place to load data or make network request
        //what is load data and network request tho? why is network request should be request after component mount?
    }
}

class UpdateLifeCycle extends React.Component{
    static getDerivedStateFromProps(){
        //invoke right after new props come in .... props dont change so the other option is state change
        //this method already in MountingLifeCycle but is also fired here, wack!!
    }
    shouldComponentUpdate(){
        //a boolean to say if true or false. If false, render() and componentDidUpdate() wont be called
    }
    render(){
        //called when data change (by that, meaning new props or state change)
        //both exist here and a mounting stage, wack!!
        return(<></>)
    }
    getSnapshotBeforeUpdate(){
        //right before most recent output is rendered
        //can't capture DOM but can read value and use for later
    }
    componentDidUpdate(){
        //invoke after update
        //this is all in order, meaning getSnapshotBeforeUpdate theoretically will run before componentDidUpdate
    }
}

class UnmountingLifeCycle extends React.Component{
        //have only 1 method
        componentWillUnmount(){
            //invoke right before component is unmounted
            //probably to capture some data or do some exiting animation
            //real usage is to do clean up, clear up network request, reset timer
            //why do the timer still run and isn't network request only happen once? Are there a type of request that run continuously?
            //after the component unmount, nothing to call it back or manipulate it further, really
        }
}