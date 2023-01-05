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
      {/* <div onClick={clickHandle}>跳转</div> */}
      </div>
    </div>
  )
}

const LocaleDropDown = () => {
  const { locale, setLocale } = useContext(Context)
  var lang = labels.locale[locale]

  const [ showDropdown, setShowDropdown ] = useState(false)


  useEffect(() => {
    lang = labels.locale[locale]
  }, [locale])

  const handleChange = () => {
      var lang = document.getElementById("locale").value;
      setLocale(lang)
  }

  const handleSelect = (newLang) => {
    setLocale(newLang.code)
    setShowDropdown(false)
}
 
  return (
      // <select id='locale' className='locale-input-dropdown' onChange={() => handleChange()}>
      //   {lang.map((l, i) => <option key={i} value={l.code}>{l.tag}</option>)}
      // </select>
      <div className='locale-input-container'>
        <input className='locale-input-button' type='button' value={labels.language[locale]} onClick={() => setShowDropdown(!showDropdown)}/>
        <ul className='locale-input-dropdown'
          style={{ 
            overflow: 'hidden',
            height: showDropdown ? "50px" : "0px",
            transition: showDropdown ? "height 0.15s ease-in" : "height 0.15s ease-out"
          }}
        >
          {lang.map((l, i) => <li className='locale-input-element' key={i} value={l} onClick={() => handleSelect(l)}>{l.tag}</li>)}
        </ul>
      </div>
  )
}

const ResetButton = () => {
  const { locale, setClearInput } = useContext(Context)
  
  var display = labels.reset[locale]
  useEffect(() => {
    display = labels.reset[locale]
  }, [locale])

  return (
    <div>
      <input className='button-style' type='button' value={display} onClick={() => setClearInput(true)}/>
    </div>

  )
}

function ShowHideButton() {
  const { locale, hide, setHide  } = useContext(Context)
  
  var display = hide ? labels.show[locale] : labels.hide[locale]
  useEffect(() => {
    display = hide ? labels.show[locale] : labels.hide[locale]
  }, [locale])

  return (
    <div>
      <input className='button-style' type='button' value={display} onClick={() => setHide(!hide)}/>
    </div>

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
