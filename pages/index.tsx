import type { NextPage } from 'next'
import HeaderTag from './components/HeaderTag'
import FeaturesTag from './components/FeaturesTag'
import AchievementsTag from './components/AchievementsTag'
import OffersTag from './components/OffersTag'
import FooterTag from './components/FooterTag'
import FormContact from './components/FormContact'
import {useState} from 'react'
import { offersCards } from './components/data/offers'
import PrivacyPolicy from './components/PrivacyPolicy'
import { features} from './components/data/features'

import Head from 'next/head'
import icon from '../icon.ico'

export async function getStaticProps() {
  return {
    props: {},
    revalidate: false
  }
}

const Home: NextPage = ({}) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [displayDocument, setDisplayDocument] = useState(false);
  const [pickedCourse, setPickedCourse] = useState('История');
  const [feature, setFeature] = useState(features[0])

  const callBackToHideForm = () => {
    setDisplayForm(false);
  }

  const callBackToShowForm = () => {
    setDisplayForm(true);
  }

  const callBackToHideDocument = () => {
    setDisplayDocument(false);
  }

  const callBackToShowDocument = () => {
    setDisplayDocument(true);
  }

  return (
    <div>
      <Head>
          <link rel="shortcut icon" href={icon.src}/>
      </Head>
      <HeaderTag callBackToShow = {callBackToShowForm}/>
      <FeaturesTag features={features} feature={feature} setFeature={setFeature}/>
      <AchievementsTag/>
      <OffersTag callBackToShow = {callBackToShowForm} offers={offersCards}/>
      <FooterTag callBackToShow={callBackToShowDocument}/>
      <FormContact display={displayForm} callBackToHide={callBackToHideForm} pickedCourse={pickedCourse} setPickedCourse={setPickedCourse} offers={offersCards}/>
      <PrivacyPolicy display={displayDocument} callBackToHide={callBackToHideDocument}/>
    </div>
  )}

export default Home
