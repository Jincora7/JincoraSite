  // import Layout from './Layout.jsx'

  // // components 
  // import Home from './components/Home/Home.jsx'
  // import Services from './components/Services/Services.jsx'
  // import Portfolio from './components/Portfolio/Portfolio.jsx'
  // import About from './components/About/About.jsx'
  // import Contact from './components/Contact/Contact.jsx'
  // import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Layout />}>
  //       <Route path='' element={<Home />} />
  //       <Route path='/services' element={<Services />} />
  //       <Route path='/portfolio' element={<Portfolio />} />
  //       <Route path='/about' element={<About />} />
  //     </Route>
  //   )
  // )

  // function App() {

  //   return (
  //       <RouterProvider router={router}/>
  //   )
  // }

  // export default App


  // ----------------------------------


  import Layout from './Layout.jsx'

  // components 
  import Home from './components/Home/Home.jsx'
  import Services from './components/Services/Services.jsx'
  import Portfolio from './components/Portfolio/Portfolio.jsx'
  import About from './components/About/About.jsx'
  import Contact from './components/Contact/Contact.jsx'
  import Footer from './components/Footer/Footer.jsx'
  import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions.jsx'
import Policy from './components/Policy/Policy.jsx'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy-policy' element={<Policy />} />
        {/* <Route path='/about' element={<About />} /> */}
        
      </Route>
    )
  )

  function App() {

    return (
        <RouterProvider router={router}/>
    )
  }

  export default App