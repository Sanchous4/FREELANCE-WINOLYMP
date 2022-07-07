import {Dispatch, SetStateAction} from 'react';

export interface feature {
    id: number;
    name: string;
    animationName: string;
}

export interface Props {
    features: feature[];
    feature: feature;
    setFeature: Dispatch<SetStateAction<feature>>;
}

// export interface Animation {
//     backgroundImage: string;
// }
