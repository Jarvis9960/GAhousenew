import React, { useCallback, useState } from 'react'
import Head from 'next/head';
import { PopupButton } from 'react-calendly';
const PopUp = () => {
  const popUpFunction = useCallback(() => {
    try {
      console.log("caalling", window.Calendly)
      typeof window !== "undefined" && Calendly?.showPopupWidget("https://calendly.com/garealestate/30min")
      console.log("caalled", window)
    }
    catch (err) {
      console.log(err)
    }
  }, []);
  return { popUpFunction }
}
export default PopUp