import React from 'react';
import type {NextPage} from 'next';
import styles from '../../styles/custom/styles/offers.module.sass'
import { Props } from '../../modules/types/OffersTag';
import { offerCard } from '../../modules/types/OffersTag';

const OffersTag : NextPage<Props> = (props) => {
    const {callBackToShow, offers} = props
    return (
        <div className={styles["offers-box"]}>
        <div className={styles["offers-content-box"]}>
            <div className={styles["offers-main-text"]}>
                Выберите, какой курс вам подходит
            </div>

            {offers?.map((item : offerCard)=>(
                <div key={item.id.toString()} className={styles["offers-offer-box"]}>
                    <div className={styles["offers-offer-box-label"]}>
                        { item.name }
                    </div>
                    <div className={styles["offers-offer-box-price"]}>
                        <p>4990</p> в месяц
                    </div>
                    <div className={styles["offers-offer-box-discount"]}>
                        <div className={styles["offers-offer-box-discount-p"]}>
                            <p>при разовой оплате</p>
                            <p>за 9 месяцев</p>
                            3 месяца в подарок
                        </div>
                    </div>
                    <div className={styles["offers-offer-button-div"]}>
                        <button onClick={()=>callBackToShow()} className={styles["offers-offer-box-button"]}>
                            Взять курс
                        </button>
                    </div>
                </div>
            ))}
            
            
            

        </div>
    </div>
    );
}

export default OffersTag;