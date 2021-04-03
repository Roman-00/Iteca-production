import React from "react";

const ServicesItem = (props) => {

    const {id, nomenklatura, summa, b_fixed, count, curency, datarec } = props;

    return <>
        <li className="services__list--item">
            {nomenklatura} ({count} шт)
        </li>
    </>

};

export { ServicesItem };