import {Dispatch, SetStateAction} from 'react';
import {hidePopUp} from './common/HidePopUp';
import {offerCard} from './OffersTag';

export interface Props extends hidePopUp {
    display: boolean;
    pickedCourse: string;
    setPickedCourse: Dispatch<SetStateAction<string>>;
    offers: offerCard[];
}
