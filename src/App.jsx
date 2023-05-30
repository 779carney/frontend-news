import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom';
import Topics from './components/Topics'
import ArticleList from './components/ArticleList';
function App() {


  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ArticleList/>} />
        <Route path="/topics" element={<Topics />} /> 
         </Routes>
     

    </>
  )
}

export default App
