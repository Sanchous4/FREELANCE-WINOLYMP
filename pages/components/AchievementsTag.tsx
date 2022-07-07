
import React from 'react';
import type {NextPage} from 'next';
import Image from 'next/image'
import styles from '../../styles/custom/styles/achievements.module.sass'
import PointsFrame from '../../source/imgs/points-frame.png'
import CheckMark from '../../source/imgs/check-mark.png'

const AchievementsTag : NextPage = () => {
    return (
        <div className={styles["achievements-wrapper"]}>
        <div className={styles["achievements-wrapper-img"]}>
            <div className={styles["img-wrapper"]}>
                <Image src={PointsFrame} alt="" />
            </div>
        </div>
        <div className={styles["achievements-wrapper-content"]}>
            <div className={styles["achievements-wrapper-content-2"]}>
                <div className={styles["achievements-text-label"]}>
                    <p>Всё, что вам нужно</p>
                    <p>для БВИ - у нас в</p>
                    <p>онлайн-школе</p>
                </div>
                <div className={styles["achievements-text-points-box"]}>
                    <div className={styles["achievements-text-point"]}>
                        <div className={styles["achievements-text-point-mark"]}>
                            <div className={styles["img-wrapper"]}>
                                <Image src={CheckMark} alt=""  />
                            </div>
                        </div>
                        <div className={styles["achievements-text-point-text"]}>
                            <p><b>Победить в олимпиаде</b> и поступить в</p> вуз
                            мечты
                        </div>
                    </div>
                    <div className={styles["achievements-text-point"]}>
                        <div className={styles["achievements-text-point-mark"]}>
                            <div className={styles["img-wrapper"]}>
                                <Image src={CheckMark} alt="" />
                            </div>
                        </div>
                        <div className={styles["achievements-text-point-text"]}>
                            <p><b>Получить нужные знания</b> и достичь</p>
                            успехов в
                            жизни
                        </div>
                    </div>
                    <div className={styles["achievements-text-point"]}>
                        <div className={styles["achievements-text-point-mark"]}>
                            <div className={styles["img-wrapper"]}>
                                <Image src={CheckMark} alt="" />
                            </div>
                        </div>
                        <div className={styles["achievements-text-point-text"]}>
                            <p><b>Познакомится с интересными людьми</b></p> и
                            расслабиться
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AchievementsTag