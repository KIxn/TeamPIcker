import './Jokezz.css';
import {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';

export class Jokezz extends Component{
    constructor(props){
        super(props);
        this.newJoke = this.newJoke.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.state = {
            setup: '',
            punch: '',
            loading: true
        }
    }

    async componentWillMount(){
        try{
            const response = await fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "2d94187975mshcd26fcd4760c33ep1b3852jsne8c412555780",
                    "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
                }
            });

            if(response.ok){
                const jsonresp = await response.json();
                const set = jsonresp.body[0].setup;
                const p = jsonresp.body[0].punchline;
                await this.setState({
                    setup: set,
                    punch: p,
                    loading: false
                })
            }else{
                throw new Error('API UNRESPONSIVE');
                alert('API ERROR, CHECK NETWORK DIAGNOSTICS');
            }
        }catch(e){
            console.log(e.message);
        }
    }

    async newJoke(){
        try{
            await this.setState({
                setup: '',
                punch: '',
                loading: true
            });

            const response = await fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "2d94187975mshcd26fcd4760c33ep1b3852jsne8c412555780",
                    "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
                }
            });

            if(response.ok){
                const jsonresp = await response.json();
                const set = jsonresp.body[0].setup;
                const p = jsonresp.body[0].punchline;
                await this.setState({
                    setup: set,
                    punch: p,
                    loading: false
                });
            }else{
                throw new Error('API UNRESPONSIVE');
                alert('API ERROR, CHECK NETWORK DIAGNOSTICS');
            }
        }catch(e){
            console.log(e.message);
        }
    }

    render(){
        return(
            <div className='Box'> 
               {this.state.loading ?  <FontAwesomeIcon id='loader' icon={faCircleNotch} spin size="3x"/>
               : 
               (
                   <div className="Box">
                       <h4>{this.state.setup}</h4>
                        <br/><br/>
                        <h4>{this.state.punch}</h4>
                        <br/>
                   </div>
               )}
               <button onClick={this.newJoke}>New Joke!</button>
            </div>
        );
    }
}

export default Jokezz;
