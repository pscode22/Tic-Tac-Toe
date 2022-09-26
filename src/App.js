import React, {  useEffect, useRef, useState } from 'react'
import './App.css';
import Board from './Board';

function App() {

  const [state, setState] = useState({
    col_0 : '', col_1 : '', col_2 : '',

    col_3 : '', col_4 : '', col_5 : '',

    col_6 : '', col_7 : '', col_8 : '',
  });

  const player = useRef('X');

  const handleClick = (e) => {
    let value = e.target.innerText;
    let id = e.target.id;

    if(value === ''){
      if(player.current === 'O') {
        setState({...state, [id]: 'O' });
        return player.current = 'X';
      } 
      else if (player.current === 'X') {
        setState({...state, [id]: 'X'});
        return player.current = 'O';
      }

    }
    else {
      return ;
    }

  }

  const resetBtn = () => {
    setState({
      col_0 : '', col_1 : '', col_2 : '',
      col_3 : '', col_4 : '', col_5 : '',
      col_6 : '', col_7 : '', col_8 : '',
    });
    player.current = 'X';
  }

  useEffect( () => {
    setTimeout(() => {
      let pairs = Object.entries(state);

     const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
     ];

      for(let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if(pairs[a][1] !== ''  && pairs[a][1] === pairs[b][1] && pairs[b][1] === pairs[c][1]){
          alert(`Player ${pairs[a][1]} Win`);
          resetBtn();
        }
      }
    }, 200)
  }, [state])

  return (
    <div className="App">
      
      <Board handleClick={handleClick} value1={state.col_0} 
        value2={state.col_1} value3={state.col_2} value4={state.col_3}
        value5={state.col_4} value6={state.col_5} value7={state.col_6}
        value8={state.col_7} value9={state.col_8}
      />
 
      <div className='sec-div'>
        <div className='current'>Current Player : {player.current} </div>
        <button type="button" className="btn btn-outline-light" onClick={resetBtn}>RESET GAME</button>
      </div>

    </div>
  );
}

export default App;
