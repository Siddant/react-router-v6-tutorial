import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact, { contactAction } from './pages/help/Contact'
import NotFound from './pages/NotFound'

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'
import Careers, { careersLoader } from './pages/careers/Careers'
import CareerDetails, {
  careerDetailsLoader,
} from './pages/careers/CareerDetails'
import CareersError from './pages/careers/CareersError'

// previously we used the <BrowserRouter /> that already made browser router
// but now we have to create browser router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />

      {/* so this is /help */}
      {/* 
          we can have parent layout in child route extended even deeper, so we can have additional parent routes
          layout for different section of the website. 
          such as register another router underneath the other routes  
       */}
      <Route path='help' element={<HelpLayout />}>
        {/* /help/faq */}
        <Route path='faq' element={<Faq />} />
        {/* the action is fired when the form is submitted */}
        <Route path='contact' element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path='careers'
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
          // errorElement={<CareersError />}
        />
        <Route
          path=':id'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          // errorElement={<CareersError />}
        />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
