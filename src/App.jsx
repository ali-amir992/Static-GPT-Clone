import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import HomePage from './Pages/HomePage'
import GptPage from './Pages/GptPage'
import AiPage from './Pages/AiPage'
import CaseStudiesPage from './Pages/CaseStudiesPage'
import Notfound from './Pages/Notfound'



const App = () => {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/GptPage" element={<GptPage/>} />
          <Route path="/AiPage" element={<AiPage/>} />
          <Route path="/CaseStudiesPage" element={<CaseStudiesPage/>} />
        </Route>
        <Route path="*" element={<Notfound />} />
        
      </Routes>

    </div>
  )
}

export default App