import React from 'react';
import type { NextPage } from 'next';
import styles from '../../styles/custom/styles/footer.module.sass'
import {showPopUp as Props} from '../components/types/common/ShowPopUp'


const FooterTag : NextPage<Props> = (props) => {
    const {callBackToShow} = props
    return (
        <div className={styles["footer-content"]}>
            <div className={`${styles["footer-ooo"]} ${styles["footer-text"]}`}>
                ©ООО«OlympWin»
            </div>
            <div onClick={()=>callBackToShow()} className={`${styles["footer-info"]} ${styles["footer-text"]}`}>
                Политика конфиденциальности
            </div>
            <div className={`${styles["footer-olympwin"]} ${styles["footer-text"]}`}>
                <p>WinOlymp</p>
            </div>
        </div>
    );
};

export default FooterTag;