import React from 'react';
import { useState, useEffect } from 'react';

import { getInfoNomenklatura } from '../api';

import { Aside } from './Aside';

import { ServicesList } from '../components/Services/ServicesList';
import { ServicesCalc } from '../components/Calculator/ServicesCalc';
import { Maket } from '../components/Maket/Maket';

const Services = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        getInfoNomenklatura().then(data => {
            setList(data.NomenklaturaList)
        })
    }, [])

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
                                <div className="services__block">
                                    <div className="services__block--left">
                                        <span className="services__block--left-title">
                                            Список оборудования:
                                        </span>
                                        <ServicesList list={list} />
                                    </div>
                                    <div className="services__block--right">
                                        <span className="services__block--right-title">
                                            Схема Вашего базового стенда: 
                                        </span>
                                        <Maket/>
                                    </div>
                                </div>
                                <div className="services__calculator">
                                    <h2 className="services__calculator--title">
                                        Надпись для фризовой панели
                                    </h2>
                                    <p className="services__calculator--except">
                                        В стоимость оборудования стенда уже включена надпись до 15 символов на каждую открытую сторону.
                                        Каждая дополнительная буква будет стоить 3 у.е . Пожалуйста, впишите Вашу надпись в строку, 
                                        расположенную ниже. Итоговая стоимость ссумируется автоматически.
                                    </p>
                                    <div className="services__calculator--container">
                                        <ServicesCalc/>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <aside className="sidebar sidebar1">
                        <Aside />
                    </aside>
                </div>
            </div>  


            </div>

            </section>
    </>

};

export { Services };