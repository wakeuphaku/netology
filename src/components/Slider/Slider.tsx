import React, { useEffect, useState } from 'react';
import './Slider.scss';
import slide1 from '../../images/slide1.png';
import slide2 from '../../images/slide2.png';
import slide3 from '../../images/slide3.png';
import slide4 from '../../images/slide4.png';
import slide5 from '../../images/slide5.png';

const slides = [slide1, slide2, slide3, slide4, slide5];

const slideData = [
    { title: 'Fashion ракурсы', description: 'Откройте для себя секреты создания уникальных fashion ракурсов с помощью Midjourney. Мы расскажем, как подобрать идеальный стиль, позу и атмосферу.' },
    { title: '3D объекты', description: 'Научитесь создавать впечатляющие 3D объекты с помощью Midjourney. Узнайте, как воплотить свои идеи в трехмерной форме и придать вашим проектам реалистичность.' },
    { title: 'Фоновые изображения', description: 'Погрузитесь в мир создания фоновых изображений с Midjourney. Узнайте, как подобрать идеальный фон для ваших проектов, чтобы подчеркнуть стиль.' },
    { title: 'Портреты', description: 'Откройте для себя искусство создания портретов с Midjourney. Узнайте, как передать эмоции, характер и стиль персонажа, создавая уникальные образы.' },
    { title: 'Персонажи', description: 'Создавайте захватывающих персонажей с помощью Midjourney. Узнайте, как воплотить в жизнь уникальные образы, придавая им характер и индивидуальность.' }
];

export default function Slider() {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [xPos, setXPos] = useState<number>(0);
    const [step, setStep] = useState<number>(437);

    useEffect(() => {
        const resize = () => {
            if (window.innerWidth <= 768) {
                setStep(294.5)
            } else {
                setStep(437)

            }
        }
        resize()
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
            console.log(step)
        };
    }, [step]);


    const touchStart = (event: React.TouchEvent) => {
        setXPos(event.touches[0].pageX);
        console.log('start')
    };

    const touchEnd = (event: React.TouchEvent) => {
        if (xPos === 0) return;

        const touchEndX = event.changedTouches[0].pageX;

        if (touchEndX < xPos) {
            nextSlide();
            console.log('left');
        } else {
            prevSlide();
            console.log('right');
        }
        setXPos(0);
    };

    const nextSlide = () => {
        setCurrentIndex((item) => {
            const newIndex = item + 1;
            if (window.innerWidth <= 768) {
                return newIndex >= 5 ? item : newIndex;
            } else {
                return newIndex >= 3 ? item : newIndex;
            }
        });
    };

    const prevSlide = () => {
        setCurrentIndex((item) => {
            const newIndex = item - 1;
            return newIndex < 0 ? item : newIndex;
        });
    };

    return (
        <div className="slider" onTouchStart={touchStart}
            onTouchEnd={touchEnd}
        >
            <div className="slider__block">
                <div className="slider__text">
                    <p className="slider__bullet bullet">Библиотека</p>
                    <h2 className='slider__title'>Рандомные стили</h2>
                </div>
                <div className="slider__buttons">
                    <button className="slider__button-left" onClick={prevSlide}></button>
                    <button className="slider__button-right" onClick={nextSlide}></button>
                </div>
            </div>
            <div className="slider__container" style={{ transform: `translateX(-${currentIndex * step}px)` }}>
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        <img src={slide} alt={`Slide ${index + 1}`} className="slide__img" />
                        <div className="slide__text-block">
                            <h3 className="slide__title">{slideData[index].title}</h3>
                            <p className="slide__text">{slideData[index].description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
