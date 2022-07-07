import Image from 'next/image'
import BluredHeader from '../../source/imgs/blur-header.png'
import Star from '../../source/imgs/star.png'
import type { NextPage } from 'next'
import styles from '../../styles/custom/styles/header.module.sass'
import { Props } from '../../modules/types/HeaderTag'

const HeaderTag : NextPage<Props> = (props) => {
  const  {callBackToShow} = props
  return (
    <div> 
        <div className={styles["header-background"]}>
            <div className={styles["text-box"]}>
                <div className={styles["contact-info-img-view"]}>
                    <div className={styles["img-wrapper"]}>
                        <Image src={Star} alt="*" />
                    </div>
                </div>
                <div className={styles["contact-info"]}>
                    <div className={styles["contact-info-winolymp"]}>
                        <div className={styles["contact-info-img"]}>
                            <div className={styles["img-wrapper"]}>
                                <Image src={Star} alt="*" />
                            </div>
                        </div>
                        <div className={styles["contact-info-win"]}>win</div>
                        <div className={styles["contact-info-olymp"]}>olymp</div>
                    </div>
                    <div className={styles["contact-info-phone-options"]}>
                        <div className={styles["contact-info-phone"]}>8 800 000 00 00</div>
                        <div className={styles["contact-info-phone-separator"]}></div>
                        <div onClick={()=>callBackToShow()} className={styles["contact-info-take-phone"]}>Заказать звонок</div>
                        <div></div>
                    </div>
                </div>
                <div className={styles["main-text"]}>
                    <p className={styles["win"]}>выиграй</p>
                    <p className={styles["after-win"]}>олимпиаду</p>
                    <p className={styles["after-win"]}>школьников</p>
                </div>
                <div className={styles["trial-text"]}>
                    <p className={styles["trial-course"]}>пробный курс</p>
                    <p className={styles["trial-course-free"]}>бесплатно!</p>
                </div>
                <div className={styles["take-btn-div"]}>
                    <button onClick={()=>callBackToShow()} className={styles["take-btn"]}>взять курс</button>
                </div>
            </div>
            <div className={styles["header-img"]}>
                <div className={styles["img-wrapper"]}>
                    <Image
                    layout='fill' objectFit='cover' objectPosition="0% 0%"  src={BluredHeader} alt="header-background"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTag;