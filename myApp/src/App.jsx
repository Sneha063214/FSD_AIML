import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import Stopwatch from './components/Stopwatch'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}/>
          <Route path="/stopwatch" element={<Stopwatch/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/mycart" element={<h1>cart page</h1>}/>
          <Route path="/myorders" element={<h1>my orders page</h1>}/>
          <Route path="/settings" element={<h1>Settings page</h1>}/>
          <Route path="*" element={<h1>error: Page not found</h1>}/>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
