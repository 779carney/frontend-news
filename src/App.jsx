import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom';
import Topics from './components/Topics'
import ArticleList from './components/ArticleList';
import { TopicContext } from '../TopicContext'
import FilterTopics from './components/FilterTopics';
import SingleArticle from './components/SingleArticle';


function App() {
  const [topic, setTopic]= useState([])

  return (
    <>
    <TopicContext.Provider value={{topic, setTopic}}>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ArticleList/>} />
        <Route path="/topics" element={<Topics />} /> 
       <Route path="/topics/:topic" element ={<FilterTopics/>} />
       <Route path="/articles/:article_id" element ={<SingleArticle/>}/>
         </Routes>
     </TopicContext.Provider>
    </>
  )
}

export default App
