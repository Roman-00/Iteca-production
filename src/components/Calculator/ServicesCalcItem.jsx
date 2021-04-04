import React from 'react';
import { useState, useEffect } from 'react';


const ServicesCalcItem = (props) => {

    const { b_ostrov, b_poluostrov, b_ugol, d_plstenda, friza, maket, status } = props;

    const [value, setValue] = useState('');
    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
      if (b_ugol) {
        setChecked(checked.false)
      } else if(!b_ugol) {
        setChecked(checked.true)
      }
    }

    
    return (
      <>
       {d_plstenda}
        <div className="services__calculator--interface">
          <input 
            type="text" 
            className="services__calculator--input"
          />
          <div className="services__calculator--result">
           <div className="calculator__result--block">
             <label className="calculator__result--label">
               Угол
             </label>
             <input 
              type="checkbox" 
              className="calculator__result--checkbox"
              checked={checked} onChange={handleChecked}
            />
           </div>
          </div>
        </div>
      </>
    )

};

export { ServicesCalcItem };