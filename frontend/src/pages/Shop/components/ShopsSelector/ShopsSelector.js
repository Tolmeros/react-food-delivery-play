import React from 'react';

import ToggleButton from 'react-bootstrap/ToggleButton';

import './ShopsSelector.css';

function ShopsSelector({items, onChange, selected}) {
  

  return (
    <div className="shops-selector-container">
      <h2> Shops: </h2>
      <div className="btn-group">
        {items.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            variant="outline-dark"
            name="radio"
            value={radio.value}
            checked={selected === radio.value}
            onChange={onChange}
            className="btn-group-radio-btn"
            size="lg"
          >
            {radio.name}
          </ToggleButton>
        ))}
      </div>
      <br />
    </div>
  );
}

export default ShopsSelector;
