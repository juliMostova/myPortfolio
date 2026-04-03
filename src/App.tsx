import HeadInfo from './components/HeadSection/HeadInfo';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { FormspreeProvider } from "@formspree/react";

import './App.css';


function App() {
  
  return (
    <>
    <FormspreeProvider>
        <HeadInfo/>  
        <Projects/> 
        <Skills/> 
        <Contact/> 
       <Footer/> 
       </FormspreeProvider>
    </>
  )
}

export default App
