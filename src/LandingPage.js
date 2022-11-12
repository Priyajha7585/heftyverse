import React from 'react';
import {useSelector} from 'react-redux';
// import { formAction } from './action/form';
// import { useStore } from "react-redux";

function LandingPage() {
    // const store = useStore();
    const formData = useSelector(state=>state.formAction)
  return (
    <div>
    <h1>
    LandingPage
    </h1>
    Welcome! {formData.name} {formData.email}
    </div>
  )
}

export default LandingPage