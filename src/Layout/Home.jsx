import React from 'react';
import { Link } from 'react-router-dom';

import { HomeLsit } from '../components/Home/HomeLsit';

/* Импортируем картинку */
import stand from '../img/Stand.png';

const Home = () => {

    return <>
        <section className="home" id="home">

            <div className="container">

            <div className="content-wrapper">
                <div className="container clearfix">
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
                        <Link to="/" className="btn btn__to btn__to--orange">
                            Заказать дополнительные услуги
                        </Link>
                        <Link to="/" className="btn btn__to btn__to--blue">
                            Изменить существующий заказ
                        </Link>
                        <Link to="/" className="btn btn__to btn__to--blue">
                            Отказаться от технических услуг
                        </Link>
                    </main>
                    <aside className="sidebar sidebar1">
                        <HomeLsit/>
                    </aside>
                </div>
            </div>  


            </div>

        </section>
    </>

};

export { Home };