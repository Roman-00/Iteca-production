import React from 'react';
import { Link } from 'react-router-dom';

import { MaketItem } from './MaketItem';

const MaketList = ({object = []}) => {

    return <>
        {object && [object].map((el) => (
            <div key={'maket'} className="left__block-img">
                {el.maket ? <img src={el.maket} /> : <Link to="/" className="btn request_stand_layout btn__to--blue">Запросить схему стенда</Link>}
            </div>
            //<MaketItem key={'maket'} {...el} />
        ))}
    </>

};

export { MaketList };