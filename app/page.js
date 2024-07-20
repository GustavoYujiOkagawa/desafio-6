'use client'

import EmailSucces from "@/components/EmailSucces";
import Newslatter from "@/components/Newslatter";
import { useState } from "react";

export default function Home() {

  const [ submit, setSubmit ] = useState(false);

  const SubmitButtonProp = () => {
    setSubmit(true)
  }

  return (
    <>
    
      {!submit ?  <Newslatter SubmitButtonProp={SubmitButtonProp}/> : <EmailSucces/>}
    </>
  );
}
