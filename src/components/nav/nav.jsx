import React, { useContext, useEffect, useState } from 'react'
import './nav.css'
import '../../App.css'
import { Context } from '../context/context'
import { labels } from '../localization'
import { font_style } from '../constant'

const Nav = ({changefont}) => {

  return (
    <div className='nav-container'>
      <div className='content'>
        <LocaleDropDown changefont={changefont} />
        <ResetButton />
        <ShowHideButton />
      {/* <div onClick={clickHandle}>跳转</div> */}
      </div>
    </div>
  )
}

const LocaleDropDown = ({changefont}) => {
  const { hide, locale, setLocale } = useContext(Context)
  var lang = labels.locale[locale]


  const [ showDropdown, setShowDropdown ] = useState(false)


  useEffect(() => {
    lang = labels.locale[locale]
  }, [locale])

  const handleSelect = (newLang) => {
    setLocale(newLang.code)
    changefont(font_style[newLang.code])
    setShowDropdown(false)
  }

  const handleClick = () => {
    if (hide) {
      return
    }
    setShowDropdown(!showDropdown)
  }
 
  return (
      <div id="test-id" className='locale-input-container'>
        <label className='locale-input-button' onClick={() => handleClick()}>{labels.language[locale]}</label>
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
      <label className='button-style' onClick={() => setClearInput(true)}>{display}</label>
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
      <label className='button-style' onClick={() => setHide(!hide)}>{display}</label>
    </div>

  )
}

// function clickHandle() {
//   if ('undefined' != typeof wx && wx.getSystemInfoSync) {
//     wx.navigateTo({
//       url: '../welcome/index?id=1',
//     })
//   } else {
//     location.href = 'welcome.html'
//   }
// }

export default Nav
