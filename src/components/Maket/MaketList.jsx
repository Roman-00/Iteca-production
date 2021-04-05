import React from 'react';
import { Link } from 'react-router-dom';

import imageDefault from '../../img/image-default.png';
import pdfImg from '../../img/pdf.svg';  

const MaketList = ({object = []}) => {

    return <>
        {object && [object].map((el) => (
            <>
                <div key={el.status} className="right__block-img">
                    {el.maket_img ? <img src={el.maket_img} /> : <img src={imageDefault}/>}
                </div>
                <div className="right__block--button">
                    { el.maket ? 
                        <a href={el.maket} download className="btn request__stand_pdf btn__to--orange">
                            <span className="btn__to-thumb btn__to-thumb-orange">
                                <img src={pdfImg} alt="pdf"/>
                            </span>
                            Скачать pdf
                        </a>
                        : <Link to="/" className="btn request_stand_layout btn__to--blue">Запросить схему стенда</Link>
                    }
                </div>
            </>
        ))}
    </>

};

export { MaketList };