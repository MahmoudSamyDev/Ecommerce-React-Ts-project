import Home from '../Pages/Home/Home'
import Layout from '../layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
        </Route>
      </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
