import {Component} from 'react';
import './PlayerList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {faMinusCircle} from '@fortawesome/free-solid-svg-icons';

export class PlayerList extends Component{
    constructor(props){
        super(props);
        this.removePlayer = this.removePlayer.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
        this.managePlayer = this.managePlayer.bind(this);
        this.state = {
            tmpPlayer: ''
        }
    }

    removePlayer(p){
        this.props.Remover(p);
        console.log(p.target.id);
    }

    managePlayer(p){
        this.setState({tmpPlayer: p.target.value});
    }

    addPlayer(){
        if(this.state.tmpPlayer !== ''){
            document.getElementById('TeamDiv').style.display = 'block'
            this.props.Adder(this.state.tmpPlayer);
            const inp = document.getElementById('PlayerInput');
            inp.value = '';
            inp.focus();
            this.setState({tmpPlayer: ''});
        }
    }

    render(){
        return(
            <div className="Roster">
                <div className="inputarea">
                    <input id='PlayerInput' type="text" placeholder='Enter Player Name' onChange={this.managePlayer}/>
                    <span><FontAwesomeIcon icon={faPlusCircle} onClick={this.addPlayer} /></span>
                </div>
                <div className='TeamDiv' id='TeamDiv'>
                    <h4>Players List:</h4>
                    <ol className='TeamSheet'>
                        {this.props.players.map((p) => {
                            return(<li key={p}>{p}  <FontAwesomeIcon className='btn2' id={p}  icon={faMinusCircle} onClick={this.removePlayer}/></li>)
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default PlayerList;