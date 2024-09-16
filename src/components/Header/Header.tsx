import React from 'react';
import logo from '../../images/logo.svg';
import './Header.scss';

export default function Header() {
    return (
        <header className='header'>

            <div className="header__top">
                <img className='header__logo' src={logo} alt="Logo" />
                <button className="header__menu-button button">Меню</button>
                <button className="header__burger"></button>
            </div>
            <div className="header__mid">
                <div className="header__text-block">
                    <h1 className="header__title">Как использовать нейросети</h1>
                    <p className="header__subtitle">в графическом дизайне</p>
                </div>
                <div className="header__guide">
                    <div className="header__star"></div>
                    <div className="header__bolt"></div>
                    <p className="header__bullet bullet">Бесплатный гайд</p>
                    <p className="header__subtext">Получите бесплатный гайд <br></br> по  искусственному интеллекту, который поможет улучшить работу графического дизайнера</p>
                </div>
            </div>

            <button className="header__button button">Получить гайд</button>
            <div className="header__girl"></div>

        </header>
    );
}
