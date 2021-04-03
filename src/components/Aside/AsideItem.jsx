import React from 'react';

/*  
    Импортируем картинки
*/
import phone from '../../img/call.svg';
import mail from '../../img/email.svg';
import countrys from '../../img/flags.svg';
import home from '../../img/home.svg';

const AsideItem = (props) => {

    const {id, name, city, tel, title, foto, email, country } = props;

    return <>

        <h2 className="manager__sidebar--title">
            Ваш менеджер
        </h2>

        <figure className="manager__sidebar--figure">
            <img src={foto} alt={name} className="manafer__sidebar--figure-thumb"/>
        </figure>

        <div className="manager__sidebar--info">
            <h3 className="manager__name">
                {name}
            </h3>
            <span className="manager__position">
                {title}
            </span>
            <div className="manager__contact--info">
                <span className="manager__contact--email">
                    <img src={mail} alt="E-mail"/>
                    <span>{email}</span>
                </span>
                <span className="manager__contact--phone">
                    <img src={phone} alt="Скачать"/>
                    <span>{tel}</span>
                </span>
                <span className="manager__contact--city">
                    <img src={home} alt="Город"/>
                    <span>{city}</span>
                </span>
                <span className="manager__contact--country">
                    <img src={countrys} alt="Страна"/>
                    <span>{country}</span>
                </span>
            </div>
        </div>

    </>

};

export { AsideItem };