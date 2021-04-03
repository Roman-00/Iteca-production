import React from 'react';
import { Link } from 'react-router-dom';

import { Aside } from './Aside';

/* Импортируем картинку */
import stand from '../img/Stand.png';
import book from '../img/book-manual.png';
import pen from '../img/pen.svg';
import close from '../img/close.svg';
import download from  '../img/download.svg';

const Home = () => {

    return <>
        <section className="home" id="home">

            <div className="container">

            <div className="content-wrapper">
                <div className="container clearfix">
                    <div className="wrap">
                        <main className="content">
                            <div className="content__text">
                                <h2 className="home__title">
                                    Уважаемый Экспонент!
                                </h2>
                                <p className="home_except">
                                    В этом разделе вы можете заказать дополнительные услуги, выбрать мебель и оборудование для Вашего 
                                    стенда, а также ознакоситься с общей информацией, правилами и расписанием работы выставки. 
                                </p>
                            </div>
                            <figure className="home__figure">
                                <img src={stand} alt="картинка"/>
                            </figure>
                            <Link to="/services" className="btn btn__to btn__to--orange">
                                Заказать дополнительные услуги
                            </Link>
                            <Link to="/" className="btn btn__to btn__to--blue">
                                <span className="btn__to-thumb">
                                    <img src={pen} alt="pen"/>
                                </span>
                                Изменить существующий заказ
                            </Link>
                            <Link to="/" className="btn btn__to btn__to--blue">
                                <span className="btn__to-thumb">
                                    <img src={close} alt="close"/>
                                </span>
                                Отказаться от технических услуг
                            </Link>
                        </main>
                        <main className="content">
                            <div className="content__text">
                                <h2 className="home__title">
                                    Общая информация, расписание, правила
                                </h2>
                            </div>
                            <div className="content__column--wrap">
                                <div className="content__column--left">
                                    <figure className="home__figure">
                                        <img src={book} alt="Правила"/>
                                    </figure>
                                </div>
                                <div className="content__column--right">
                                    <ul className="content__right--ul">
                                        <li className="content__right--ul-item">
                                            План выставочного комплекса
                                        </li>
                                        <li className="content__right--ul-item">
                                            Общая информация
                                        </li>
                                        <li className="content__right--ul-item">
                                            Порядок работы в павильонах
                                        </li>
                                        <li className="content__right--ul-item">
                                            Оборудованные стенды и чистая площадь
                                        </li>
                                        <li className="content__right--ul-item">
                                            Противопожарные правила
                                        </li>
                                        <li className="content__right--ul-item">
                                            Здоровье и безопасность
                                        </li>
                                        <li className="content__right--ul-item">
                                            Доставка грузов и пр.
                                        </li>
                                    </ul>

                                    <span className="content__right--text">
                                        <span className="color">*</span>Обязательно к прочтению!
                                    </span>

                                    <div className="content__right--btn">
                                        <a href="#" className="btn__link btn__to--orange">
                                            Читать
                                        </a>
                                        <a href="#" download className="btn__link btn__to--blue">
                                            <span className="btn__to-thumb">
                                                <img src={download} alt="pen"/>
                                            </span>
                                            Скачать pdf
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <aside className="sidebar sidebar1">
                       <Aside/>
                    </aside>
                </div>
            </div>  


            </div>

        </section>
    </>

};

export { Home };