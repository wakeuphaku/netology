import React from 'react';
import './Footer.scss';

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer__block">
                <div className="footer__top">
                    <h2 className="footer__title">Использование ИИ
                        позволяет значительно
                        сэкономить ресурсы</h2>
                    <p className="footer__number">01</p>
                </div>
                <p className="footer__text">Нейросетям можно поручить рутинные задачи — сортировку или создание изображений — или реализацию целого проекта. Для этого дизайнеру нужно разбираться в инструментах и их возможностях.</p>
            </div>
        </div>
    )
}
