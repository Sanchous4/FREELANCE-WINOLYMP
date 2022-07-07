import type {NextPage} from 'next';
import styles from '../../styles/custom/styles/privacy.module.sass'
import { Props } from './types/PrivacyPolicy'
import { PrivacyPolicyText } from './data/PrivacyPolicyText';

const PrivacyPolicy: NextPage<Props> = (props) => {
    const {display, callBackToHide} = props;

    const preventHideForm = (event: React.MouseEvent<HTMLElement, MouseEvent> ) => {
        event.stopPropagation();
    }

    if(!display) return (null)
   
    return (
        <div 
            className={styles["document-wrapper"]}
            onClick={()=>callBackToHide()}
        >
            <div className={styles["document-body"]} onClick = {(event) => {preventHideForm(event)}}>
                <span className={styles["document-name"]}>политика конфиденциальности</span>
                <div className={styles["document-description"]}>
                    { PrivacyPolicyText.split('\n').map((item, index) => <p key={index}>{item}<br></br></p>) }
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
