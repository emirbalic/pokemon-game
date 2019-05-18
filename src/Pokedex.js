import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {

    let title;
    if( this.props.isWinner) {
      title = <h2 className='Pokedex-winner'>You win</h2>
    } else {
      title = <h2 className='Pokedex-loser'>You lose</h2>
    }
    return (
      <div className='Pokedex'>
        <h1>Pokedex</h1>
        {title}
        <h4>Total experience {this.props.exp}</h4>
        {/* <p> {this.props.isWinner ? 'You win': 'You lose'}</p> */}
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p, i) => (
            <Pokecard
              key={i}
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
