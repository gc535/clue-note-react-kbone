import React, { useContext, useEffect, useState } from 'react'
import './nav.css'
import '../../App.css'
import { Context } from '../context/context'
import { labels } from '../localization'

const Nav = () => {

  return (
    <div className='bg-color-red'>
      <div className='content'>
        <LocaleDropDown />
        <ResetButton />
        <ShowHideButton />
      </div>
      {/* <div onClick={clickHandle}>跳转</div> */}
    </div>
  )
}

const LocaleDropDown = () => {
  const { locale, setLocale } = useContext(Context)
  var lang = labels.locale[locale]

  useEffect(() => {
    lang = labels.locale[locale]
  }, [locale])

  const handleChange = () => {
      var lang = document.getElementById("locale-dropdown").value;
      setLocale(lang)
  }
 
  return (
      <select id='locale-dropdown' className='locale-dropdown' onChange={() => handleChange()}>
        {lang.map((l, i) => <option key={i} value={l.code}>{l.tag}</option>)}
      </select>
  )
}

const ResetButton = () => {
  const { locale, setClearInput  } = useContext(Context)
  
  var display = labels.reset[locale]
  useEffect(() => {
    display = labels.reset[locale]
  }, [locale])

  return (
    <button className='button-style' type='button' onClick={() => setClearInput(true)}>
      {display}
    </button>        

  )
}

function ShowHideButton() {
  const { locale, hide, setHide  } = useContext(Context)
  
  var display = hide ? labels.show[locale] : labels.hide[locale]
  useEffect(() => {
    display = hide ? labels.show[locale] : labels.hide[locale]
  }, [locale])

  return (
    //<button class='button-hide' type='button' onClick={() => setShowHide}>
    //  <img src="https://i.imgur.com/tXLqhgC.png" width="90" height="90" alt="submit" /> 
    //</button>
    <button className='button-style' 
      type='button' 
      onClick={() => setHide(!hide)}
    >
      {display}
    </button>

  )
}

//function clickHandle() {
//  if ('undefined' != typeof wx && wx.getSystemInfoSync) {
//    wx.navigateTo({
//      url: '../log/index?id=1',
//    })
//  } else {
//    location.href = 'log.html'
//  }
//}

export default Nav
