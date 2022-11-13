import React from 'react';
import {useSelector} from 'react-redux';
import CarouselSection from './CarouselSection';
import Header from './Header';
import QuizSection from './QuizSection';
// import { formAction } from './action/form';
// import { useStore } from "react-redux";

function LandingPage() {
    // const store = useStore();
    const formData = useSelector(state=>state.formAction)
  return (
    <div>
    <Header />
    <CarouselSection /><br/><br/><br/><br/>
    <QuizSection/>
    {/*
    <h1>
    LandingPage
    </h1>
    Welcome! {formData.name} {formData.email}
  */}
    </div>
  )
}

export default LandingPage