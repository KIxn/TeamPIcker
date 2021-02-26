import './App.css';
import {PlayerList} from './Components/PlayerList/PlayerList.js';
import {TeamList} from './Components/TeamList/TeamList.js';
import {Jokezz} from './Components/Jokezz/Jokezz.js';
import {Component} from 'react';

export class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      players: [],
      A: [],
      B: []
  };
  this.handleRemove = this.handleRemove.bind(this);
  this.handleAddition = this.handleAddition.bind(this);
  this.generateTeams = this.generateTeams.bind(this);
  }

  handleRemove(p){
    const tmparr = [];
        this.state.players.map(player => {
            if(player !== p.target.id){tmparr.push(player);}
        });
        this.setState({players: tmparr});

        console.log(p.target.id);
  }

  handleAddition(p){
    const tmparr = this.state.players;
    tmparr.push(p);
    this.setState({players: tmparr});

    console.log(p);
  }
  
  async generateTeams(){
    if (this.state.players.length > 2) {
      let tmparr = this.state.players;
      let temp2 = [];
      await this.setState({
        A:[],
        B: []
      },() => {
        console.log(this.state.A);
        console.log(this.state.B);
      });
      let s;
      while(tmparr.length > 0){
        temp2 = [];
        s = tmparr[Math.floor(Math.random() * tmparr.length)];
        temp2 = this.state.A;
        temp2.push(s);
        this.setState({A: temp2});
        tmparr = tmparr.filter(p => {return(p !== s)});
        if(tmparr.length > 0){
         s = tmparr[Math.floor(Math.random() * tmparr.length)];
         temp2 = this.state.B;
         temp2.push(s);
          this.setState({B: temp2});
          tmparr = tmparr.filter(p => {return(p !== s)});
        }
      }
      document.getElementById('Teams').style.display = 'flex';
    }
  }

  render(){
    return (
    <div className="App">
     <h1>Team Picker</h1>
     <h4><span>Add</span> Player Names, then click
     <span>Make Teams</span></h4>
     <h6>*Please Enter Distinct Player Names for functionality purposes*</h6>
     <br/>
     <PlayerList Adder={this.handleAddition} Remover={this.handleRemove} players={this.state.players}/>
     <button id='Generate' onClick={this.generateTeams}>Make Teams</button>
     <br/>
     <div id='Teams'>
        <TeamList teamname="Team A" players={this.state.A}/>
        <TeamList teamname="Team B" players={this.state.B}/>
     </div>
     <br/>
     <Jokezz />
    </div>
  );
  }
}

export default App;
