import React, { useState } from 'react';
import ShopsSelector from "./components/ShopsSelector";

function Shop() {
  const radios = [
    { name: 'Mc Donny', value: 'mcd' },
    { name: 'CFK', value: 'cfk' },
    { name: 'Duck Duck Go', value: 'ddg' },
    { name: 'Lviv\'s Pekarnya', value: 'lviv-pek' },
  ];

  const [radioValue, setRadioValue] = useState(radios[0].value);

  return (
    <div>
      <ShopsSelector
        items={radios}
        onChange={(e) => setRadioValue(e.currentTarget.value)}
        selected={radioValue}
      />
    </div>
  );
}

export default Shop;
