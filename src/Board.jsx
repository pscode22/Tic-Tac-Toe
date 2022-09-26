import React from 'react';
import './App.css'

export default function Board(props) {

    const boardStyle ={
        background : 'rgb(255, 101, 47)',
    }

    const { handleClick  } = props;

  return (
    <div className='board mx-auto border border-dark border-2 text-white' style={boardStyle}>
        <div className="row board-row">
          <div className="col board-col" id='col_0' onClick={handleClick}>{props.value1}</div>
          <div className="col board-col" id='col_1' onClick={handleClick}>{props.value2}</div>
          <div className="col board-col" id='col_2' onClick={handleClick}>{props.value3}</div>
        </div>
        <div className="row board-row">
          <div className="col board-col" id='col_3' onClick={handleClick}>{props.value4}</div>
          <div className="col board-col" id='col_4' onClick={handleClick}>{props.value5}</div>
          <div className="col board-col" id='col_5' onClick={handleClick}>{props.value6}</div>
        </div>
        <div className="row board-row">
          <div className="col board-col" id='col_6' onClick={handleClick}>{props.value7}</div>
          <div className="col board-col" id='col_7' onClick={handleClick}>{props.value8}</div>
          <div className="col board-col" id='col_8' onClick={handleClick}>{props.value9}</div>
        </div>
    </div>
  )
}
