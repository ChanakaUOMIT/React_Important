import React, { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"fdfds",
        }

        this.handleUsernameChange=this.handleUsernameChange.bind(this);

    }

    handleUsernameChange(e){
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);

        this.setState({
            username:e.target.value,
        })


    }
    render(){
        return(
            // <h1>Heloo</h1>
            <form>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={this.state.username} 
                    onChange={this.handleUsernameChange}
                />
                <button type="submit">Submit</button>
            </form> 
        )
    }
}

export default Form;