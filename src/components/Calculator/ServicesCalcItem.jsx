import React from 'react';
import { useState, useEffect } from 'react';


const ServicesCalcItem = () => {

    const [value, setValue] = React.useState("");
  const [valueLength, setValueLength] = React.useState(0);
  const [valueMoreThanTen, setValueMoreThanTen] = React.useState(0);
  const price = 30;

  React.useEffect(() => {
    if (valueLength > 10) {
      setValueMoreThanTen(valueLength - 10);
    } else if (valueLength < 11) {
      setValueMoreThanTen(0);
    }
  }, [valueLength]);

  const senRequest = () => {
    const requestObject = { valueMoreThanTen, price: valueMoreThanTen * price, value };
    fetch("https://itecaa-react-test-default-rtdb.firebaseio.com/spamle.json", {
      method: "POST",
      body: JSON.stringify(requestObject)
    });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.nativeEvent.data !== " ") {
      setValueLength(e.target.value.length);
    }
  };

  return (
    <>
      <div className="services__calculator--interface">
        <input
          type="text"
          className="name__stand"
          placeholder="Впишите надпись здесь_"
          value={value}
          onChange={handleChange}
        />
        <p>text: {valueMoreThanTen}</p>
        <p>
          {valueMoreThanTen > 0 && `цена: ${valueMoreThanTen * price} рублей`}
        </p>
        <button type="button" onClick={() => senRequest()}>
          Отправить
        </button>
      </div>
    </>
  );

};

export { ServicesCalcItem };