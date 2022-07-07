import {useEffect, useState} from 'react';
import type {NextPage} from 'next';
import Image, { StaticImageData } from 'next/image';
import styles from '../../styles/custom/styles/features.module.sass';
import LeftArrow from '../../source/imgs/slider/chevron-left-yellow.svg';
import RightArrow from '../../source/imgs/slider/chevron-right-yellow.svg';
import Man from '../../source/imgs/theory-points/man.png';
import Mark from '../../source/imgs/theory-points/mark.png';
import Ring from '../../source/imgs/theory-points/ring.png';
import World from '../../source/imgs/theory-points/world.png';
import {Props} from './types/FeaturesTag';
import { url } from './scripts/tools/urlWrapper'
import { Keyframes } from './tools/KeyFrames';

import Theory from '../../source/imgs/theory.png';
import Practice from '../../source/imgs/practice.png';
import BrainStorm from '../../source/imgs/brainstorm.png';
import Contests from '../../source/imgs/contests.png';
import Black from '../../source/imgs/black.png';
import {sleep} from './scripts/tools/sleep';

const FeaturesTag: NextPage<Props> = (props) => {
    const {features, feature, setFeature} = props;

    const [backgroundStyles, setBackgroundStyles] = useState({
        backgroundImg: Theory.src,
        animationName: 'none',
        from: { backgroundImage: 'none'},
        to: { backgroundImage: 'none'}
    })
    
    const [switchEnable, setSwitchEnable] = useState(true);
    

    const stylePickedBtn = `${styles['features-box-slider-btn']} ${styles['features-box-slider-btn-active']}`;
    const styleBtn = styles['features-box-slider-btn'];

    const stylePickedOption = `${styles['features-box-option']} ${styles['features-box-option-selected']}`;
    const styleOption = styles['features-box-option'];

    const handleRightArrow = () => {
        if (!switchEnable) return;

        const nextIndex = feature.id + 1;
        const index = nextIndex >= features.length ? 0 : nextIndex;
        setFeature(features[index]);
    };

    const handleLeftArrow = () => {
        if (!switchEnable) return;

        const nextIndex = feature.id - 1;
        const index = nextIndex < 0 ? features.length - 1 : nextIndex;
        setFeature(features[index]);
    };

    const setFeatureByName = (name: string) => {
        if (!switchEnable) return;

        const foundFeature = features.find((item) => item.name === name);
        if (foundFeature) setFeature(foundFeature);
    };

    const setBackgroundStylesByArgs = (nextImg : StaticImageData, animationName: string, from : StaticImageData | string, to: StaticImageData | string) => {
        const from_ = typeof from !== 'string' ? from.src : from
        const to_ = typeof to !== 'string' ? to.src : to

        setBackgroundStyles({
            backgroundImg: nextImg.src,
            animationName: animationName,
            from: { backgroundImage: url(from_)}, 
            to: { backgroundImage: url(to_)},
        })
    }

    const SwitchBackgroundImg = async () => {
        setBackgroundStylesByArgs(Black, 'hideImg', backgroundStyles.backgroundImg, Black);
        await sleep(250);
        switch (feature.name) {
            case 'Практика':
                setBackgroundStylesByArgs(Practice, 'showImg', Black, Practice);
                break;
            case 'Брейнштормы':
                setBackgroundStylesByArgs(BrainStorm, 'showImg', Black, BrainStorm);
                break;
            case 'Конкурсы':
                setBackgroundStylesByArgs(Contests, 'showImg', Black , Contests);
                break;
            default:
                setBackgroundStylesByArgs(Theory, 'showImg', Black, Theory);
                break;
        }
        await sleep(250);
        setSwitchEnable(true);
    };

    useEffect(() => {
        setSwitchEnable(false), SwitchBackgroundImg();
    }, [feature]);

    return (
        <div className={styles['features-box']}>
            <div className={styles['features-box-label']}>
                Чем мы занимаемся
            </div>
            <div className={styles['features-box-options']}>
                {features.map((item) => (
                    <div
                        key={item.id.toString()}
                        onClick={() => setFeatureByName(item.name)}
                        className={
                            item.name === feature.name
                                ? stylePickedOption
                                : styleOption
                        }
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className={styles['features-box-slider']}>
                <Keyframes name={backgroundStyles.animationName} from={backgroundStyles.from} to={backgroundStyles.to} />
                <div
                    style={{
                        backgroundImage: url(backgroundStyles.backgroundImg),
                        animation: `${backgroundStyles.animationName} 0.25s`
                    }}
                    className={styles['features-box-slider-img']}
                >
                    <div
                        className={styles['carousel-arrow']}
                        onClick={() => handleLeftArrow()}
                    >
                        <div className={styles['img-wrapper']}>
                            <Image
                                height={'100%'}
                                width={'100%'}
                                src={LeftArrow}
                                alt=''
                            />
                        </div>
                    </div>
                    <div className={styles['features-box-slider-btns']}>
                        {features.map((item) => (
                            <button
                                key={item.id.toString()}
                                onClick={() => setFeatureByName(item.name)}
                                className={
                                    item.name === feature.name
                                        ? stylePickedBtn
                                        : styleBtn
                                }
                            ></button>
                        ))}
                    </div>
                    <div
                        className={styles['carousel-arrow']}
                        onClick={() => handleRightArrow()}
                    >
                        <div className={styles['img-wrapper']}>
                            <Image
                                height={'100%'}
                                width={'100%'}
                                src={RightArrow}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className={styles['features-box-slider-points']}>
                    <div className={styles['slider-point']}>
                        <div className={styles['slider-point-ava']}>
                            <div>
                                <div className={styles['img-wrapper']}>
                                    <Image src={Man} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className={styles['slider-point-text']}>
                            <p>10 человек в</p>
                            группе
                        </div>
                    </div>
                    <div className={styles['slider-point']}>
                        <div className={styles['slider-point-ava']}>
                            <div>
                                <div className={styles['img-wrapper']}>
                                    <Image src={Mark} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className={styles['slider-point-text']}>
                            <p>Опытные</p>
                            преподаватели
                        </div>
                    </div>
                    <div className={styles['slider-point']}>
                        <div className={styles['slider-point-ava']}>
                            <div>
                                <div className={styles['img-wrapper']}>
                                    <Image src={Ring} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className={styles['slider-point-text']}>
                            <p>Поддержка</p>
                            кураторов
                        </div>
                    </div>
                    <div className={styles['slider-point']}>
                        <div className={styles['slider-point-ava']}>
                            <div>
                                <div className={styles['img-wrapper']}>
                                    <Image src={World} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className={styles['slider-point-text']}>
                            Занятия онлайн
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesTag;
