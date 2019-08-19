import React from 'react';
import uuid from 'uuid';

const Column: React.FC = (props: any): JSX.Element => {
  const cardsList = props.cards.map((card, i) => (
    <div className="card" key={uuid()}>
      {props.id > 0 ? (
        <button
          className="move-left"
          onClick={() => {
            props.move(-1, props.id, i);
          }}>
          left
        </button>
      ) : (
        ''
      )}
      {card}
      {props.id < 3 ? (
        <button
          className="move-right"
          onClick={() => {
            props.move(1, props.id, i);
          }}>
          right
        </button>
      ) : (
        ''
      )}
    </div>
  ));
  return (
    <div className="column">
      <div className={`column-title column-title-${props.id}`}>
        {props.name}
      </div>
      <div className="column-cards">{cardsList}</div>
      <button
        className="add-card"
        onClick={() => {
          props.addCard(window.prompt('add some text'), props.id);
        }}
      />
    </div>
  );
};
export default Column;
