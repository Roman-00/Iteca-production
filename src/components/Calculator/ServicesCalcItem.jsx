import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const ServicesCalcItem = (props) => {

    const { b_ostrov, b_poluostrov, b_ugol, d_plstenda, friza, maket, status } = props;
    
    const [value, setValue] = React.useState("");
    const [valueLength, setValueLength] = useState(0);
    const [valueMoreThanTen, setValueMoreThanTen] = useState(0);
    const price = 3;
    
    useEffect(() => {
      if(valueLength > 15) {
        setValueMoreThanTen(valueLength - 15);
      } else if (valueLength < 16) {
        setValueMoreThanTen(0);
      }
    }, [valueLength])

    const handleChange = (e) => {
      setValue(e.target.value);
      if (e.nativeEvent.data !== " ") {
        setValueLength(e.target.value.length);
      }
    };


    const [checked, setChecked] = useState(false);
    const [checkedb, setCheckedb] = useState('false');

    useEffect(() => {
      if (b_ugol) {
        setChecked(true)
      } else {
        setChecked(false)
      }
    }, [b_ugol])

    useEffect(() => {
      if (d_plstenda) {
        setCheckedb('true')
      } else {
        setCheckedb('false')
      }
    }, [d_plstenda])
    
    return (
      <>
        <div className="services__calculator--interface">
          <input 
            type="text" 
            className="services__calculator--input"
            placeholder="Впишите надпись здесь_"
            value={value}
            onChange={handleChange}
          />
          <div className="services__calculator--result">
            <div className="services__calc--checkbox-wrap">
              <div className="calculator__result--block">
                <label className="calculator__result--label">
                  Угол
                </label>
                <input
                    type="checkbox"
                    className="calculator__result--checkbox"
                    checked={checked}
                    onChange={() => {}}
                  />
              </div>
              <div className="calculator__result--block">
                <label className="calculator__result--label">
                  Полуостров
                </label>
                <input
                    type="checkbox"
                    className="calculator__result--checkbox"
                    checkedb={checkedb}
                    onChange={() => {}}
                  />
              </div>
            </div>
            <div className="additional__letters">
              <span className="additional__letters--text">
                Всего дополнительных букв
              </span>
              <div className="additional__letters--result">
                {valueMoreThanTen}
              </div>
            </div>
            <div className="additional__letters--price">
              <span className="additional__letters--prise-title">
                Стоимость в у.е.
              </span>
              <div className="additional__letters--prise-result">
                {valueMoreThanTen > 0 && `${valueMoreThanTen * price}`}
              </div>
            </div>
          </div>
          <div className="services__calc--next">
            <span className="calc__next--title">
              Для заказа дополнительного оборудования, мебели, графических 
              услуг или персонала, пожалуйста, нажмите кнопку справа ►►►
            </span>
            <Link to="/" className="btn btn__next btn__to--blue">
              Продолжить 
            </Link>
          </div>
        </div>
      </>
    )

};

export { ServicesCalcItem };