import React, { Component } from 'react';
import './quotes.css';
import axios from 'axios';

class QuotesContainers extends Component {
    constructor(props){
        super(props);
        this.state={
            // quotes:[
            //     "Quote 1", 
            //     "Quote 2"
            // ]
            quotes:[],
            isLoading:true,
            hasError:false
        }
    }


    componentDidMount(){
        // setTimeout(() =>{
        //     this.setState({
        //         quotes:["Quote 1", "Quote 2"]
        //     })
        // }, 3000)

        axios.get("http://dummy.restapiexample.com/api/v1/employees")
        .then((res) =>{
            console.log(res)
            console.log(res.data)
            // console.log(res.data.empleyee_name)
            this.setState({
                quotes:res.data,
                isLoading:false
            })
        })
        .catch((error) =>{
            this.setState({
                isLoading:false,
                hasError:true
            })
            console.log(error)
        })

    }

    render() { 
        if(this.state.isLoading){
            return(
                <p>Loading...</p>
            )
        }else{
            return (
                <div>
                    <p>quotes...</p>

                    {this.state.hasError &&
                        <p>An error occured</p>
                    }
    
                    {this.state.quotes.map((e,i)=>{
                        return(
                            <p key={i}>{e.employee_name}</p>
                        )
                    })}
                </div>
              );
        }
        
    }
}
 
export default QuotesContainers; 