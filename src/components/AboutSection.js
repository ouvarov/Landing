// @flow

import React from 'react';

const AboutSection = () => (
    <section className="about">
        <div className="about__grid">
            <i className="about__headline-icon" />
            <h2 className="about__headline">Чому саме FRED&FRESH?</h2>
            <div className="about__wrap">
                <div className="about__item">
                    <figure className="about__image-wrap">
                        <i className="about__image about__image--vegetables" />
                    </figure>
                    <div className="about__content-wrap">
                        <p className="about__title">
                            Сезонні меню — <br /> ваше добре самопочуття
                        </p>
                        <p className="about__content">
                            Ми турбуємося про те,
                            <br /> щоб з нашими пропозиціями ви
                            <br /> щосезону отримували всі корисні
                            <br /> вітаміни та мінерали
                        </p>
                    </div>
                </div>
                <div className="about__item">
                    <figure className="about__image-wrap about__image-wrap--top">
                        <i className="about__image about__image--calendar" />
                    </figure>
                    <div className="about__content-wrap about__content-wrap--top">
                        <p className="about__title">
                            Виключно
                            <br /> свіжі страви
                        </p>
                        <p className="about__content">
                            Все, що ви їсте, гарантовано
                            <br /> виготовлено саме
                            <br /> сьогодні
                        </p>
                    </div>
                </div>
                <div className="about__item">
                    <figure className="about__image-wrap about__image-wrap--main">
                        <i className="about__image about__image--chef" />
                    </figure>
                    <div className="about__content-wrap about__content-wrap--main">
                        <p className="about__title about__title--main">
                            Справжні страви
                            <br /> від шеф-повара
                        </p>
                        <p className="about__content about__content--main">
                            Звикли харчуватися якісно та смачно?
                            <br />
                            Ми приємно здивуємо вас класичними
                            <br />
                            смаками високої кухні, а також
                            <br />
                            потішимо новими унікальними поєднаннями
                            <br />
                        </p>
                    </div>
                </div>
                <div className="about__item">
                    <figure className="about__image-wrap about__image-wrap--top">
                        <i className="about__image about__image--sauce" />
                    </figure>
                    <div className="about__content-wrap about__content-wrap--top">
                        <p className="about__title">
                            Кожен інгрідіент
                            <br /> ми готуємо самостійно
                        </p>
                        <p className="about__content">
                            Майонез, шинка чи моцарелла — <br /> ніяких напівфабрикатів,
                            <br /> тільки домашні продукти
                        </p>
                    </div>
                </div>
                <div className="about__item">
                    <figure className="about__image-wrap">
                        <i className="about__image about__image--kitchen" />
                    </figure>
                    <div className="about__content-wrap">
                        <p className="about__title">
                            Ми завжди доступні, <br /> пунктуальні та відкриті
                        </p>
                        <p className="about__content">
                            Зручна доставка, гнучкі <br /> замовлення, індивідуальний
                            <br /> підхід — з нами просто і приємно
                            <br />
                            працювати
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;
