import React, { useState, useEffect, Component, useMemo, useCallback, useReducer, useRef } from 'react'
import HeaderSection from '../components/Header';
import logo from '../logo.svg';
import Hero from '../components/Hero';
import Roadmap from '../components/Roadmap';
import Faq from '../components/Faq';
import Art from '../components/Art';
import Team from '../components/Team';
import { BackTop } from 'antd';

const Homepage = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case 'setRefs':
        return { ...state, refs: action.payload};

      default:
        throw new Error();
    }
  }

  
  
  const [state, dispatch] = useReducer(reducer, { refs: {'hero': null, 'roadmap': null, 'art': null, 'team': null, 'faq': null} })

  useEffect(() => {
    // dispatch({type: 'setRefs', payload: {'roadmap': roadmap, 'art': art, 'team': team, 'faq': faq}})
  }, [state])


  return (
    <div >
      <BackTop />
      <HeaderSection state={state} dispatch={dispatch} />

      <Hero state={state} dispatch={dispatch} />
      <Roadmap state={state} dispatch={dispatch} />
      <Art state={state} dispatch={dispatch}  />
      <Team state={state} dispatch={dispatch}  />
      <Faq state={state} dispatch={dispatch}  />


    </div>
  )
}

export default Homepage