import { useState } from 'react';
import type {NextPage} from 'next';
import styles from '../../styles/custom/styles/form.module.sass'
import { Props } from '../../modules/types/FormContact'
import { offerCard } from '../../modules/types/OffersTag';
import { event } from '../../modules/types/common/Event';
import { Keyframes } from '../../modules/components/tools/KeyFrames';

const FormContact: NextPage<Props> = (props) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const {display, callBackToHide, pickedCourse , setPickedCourse, offers} = props;
    const [displaySuccess , setDisplaySuccess] = useState(false)

    const [isValidForm, setIsValidForm] = useState(true);

    const preventHideForm = (event: event ) => {
        event.stopPropagation();
    }

    const handleSuccessSubmit = (event: event ) => {
        setIsValidForm(true);
        setDisplaySuccess(true)
        setTimeout(()=>{         
            callBackToHide()
            setDisplaySuccess(false)
        }, 5000)
    }

    const [sendInputValue, setSendInputValue] = useState('Отправить')

    const handleSubmit = (event: event) => {
        event.preventDefault();

        if(!isValidForm) return

        const checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(phoneNumber);

        const checkPhoneNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phoneNumber);

        const checkLength = phoneNumber.length > 8

        if(phoneNumber === 'Sani4') alert('Hi, this site was created by Sani')

        if((checkPhoneNumber || checkEmail) && checkLength)
            handleSuccessSubmit(event);
        else {
            setIsValidForm(false)
            setTimeout(()=>setIsValidForm(true), 2000)
        }
    }

    if(!display) return (null)

    if(displaySuccess) return (
        <div 
            className={styles["form-div"]}
            onClick={()=>callBackToHide()}
        >
            <form action='' className={styles["form-form"]} onClick = {(event) => {preventHideForm(event)}}>
                <p className={styles["form-form-success"]}>Спасибо, заявка успешно оставленна, мы перезвоним вам в течение дня !</p>
            </form>
        </div>
    )

   
    return (
        <div 
            className={styles["form-div"]}
            onClick={()=>callBackToHide()}
        >
            <form action='' className={styles["form-form"]} onClick = {(event) => {preventHideForm(event)}}>
                <p className={styles["form-logo"]}>WINOLYMP</p>
                <label htmlFor='' className={styles["form-pick-course-label"]}>Меня интересует</label>
                <div className={styles["form-pick-course-div"]}>
                    {
                        offers?.map((item : offerCard) => (
                            <button
                                key={item.id.toString()} 
                                style = {{'background' : item.name === pickedCourse ? 'rgba(253, 236, 83, 1)' : 'rgba(253, 236, 83, 0.5)'}} 
                                type="button" 
                                onClick={() => setPickedCourse(item.name)} 
                                className = {styles["form-pick-course-button"]}
                            >
                                {item.name}
                            </button>
                        )
                        )
                    }
                </div>
                <div className={styles["form-email-div"]}>
                    <label htmlFor='' className={styles["form-email-label"]}>
                        <div className={styles["form-email-p"]}>Мой Email или номер телефона</div>
                    </label>
                </div>

                <Keyframes name='blink' from={{backgroundColor : 'rgba(253, 236, 83, 1)'}} to={{backgroundColor : 'red'}}></Keyframes>
                <input style={ isValidForm ? {} : {animation: 'blink 0.5s alternate ease-in-out infinite'}} value={phoneNumber} onChange={(event)=>setPhoneNumber(event.target.value)} className={styles["form-email-input"]} type='text' placeholder='+7-900-600-30-10'/>
                <input className={styles["form-email-submit"]} type='submit' value={sendInputValue} onClick={(event)=>handleSubmit(event)}
                onMouseEnter={() => setSendInputValue("Отправить »")}
                onMouseLeave={() => setSendInputValue('Отправить')}
                />
            </form>
        </div>
    );
};

export default FormContact;
