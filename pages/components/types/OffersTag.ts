import {showPopUp} from './common/ShowPopUp';

export interface offerCard {
    id: number;
    name: string;
}

export interface Props extends showPopUp {
    offers: offerCard[];
}
