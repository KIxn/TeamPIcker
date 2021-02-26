import {Component} from 'react';
import './TeamList.css';

export class TeamList extends Component{
    render(){
        return(
            <div className="teamblock">
                <h4>{this.props.teamname}</h4>
                <ul>
                    {this.props.players.map(p => {
                        return(<li key={p}>{p}</li>);
                    })}
                </ul>
            </div>
        )
    }
}

export default TeamList;