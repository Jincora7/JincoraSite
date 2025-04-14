import "./App.css"
import Layout from './Layout.jsx'

// components 
import Home from './components/Home/Home.jsx'
import Services from './components/Services/Services.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)

function App() {

  return (
    <div className="main">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
