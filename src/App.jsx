import { useState } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProjectCards from '../components/ProjectCards'
import Certificates from '../components/Certificate'
import Skills from '../components/Skills'
import HeaderImg from "/header_icon.jpg"
import {  BrowserRouter } from "react-router-dom"



export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header src={HeaderImg}/>
    </BrowserRouter>
    <main>
      <Hero src={HeaderImg}/>
      <About/>
      <Skills/>
      <ProjectCards/>
      <Certificates/>
      <Contact/>
    </main>
    <Footer/>
    </>
  )
}
