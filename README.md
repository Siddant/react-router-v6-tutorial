react router is needed because react doesnot come with a fully baked front-end routing mechanism. therefore an additional package is needed to be installed called react router dom, which allow us to handle routin in the browser.

it works by intercepting page request by the user by click the link to a different page in the website, from reaching the server and instead swaps out the page content depending on what ever the page that we requested, where each page is just react component.

the `BrowserRouter` is a browser router which is a component that will wraps our entire application and allow us to use the router within it.

`NavLink` and `Link` component create links which allows react router to intercept inside the browser router. it will appear as an anchor tag in the actual dom, but it will have the added ability where react router can intercept the request to the server and swaps it for a react component.

the different between `NavLink` and `Link` component is that in a `NavLink` component it can add an active classes, which can be used to style using css.

```jsx
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
        </nav>
      </header>
      <main>
        {/* the Routes is kind of a parent component for multiple different route component */}
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route index element={<Home />} />

          {/* 
              the path don't need the /, because react router is going to know that this is kind of a root route
              and add the / for is
           */}
          <Route path='about' element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
```

new feature to react router are only avilable to v6.4 up and routes are created like:

```jsx
createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
)
```

loader are a way to load data into a component before it renders. it allow us to fetch data from an external api before the component renders in the browser. inside of that component we don't need to worry about using `useEffect` hook when the componenet renders.

route parameters:

- changeable section of a route
- same component shown for every variation

form actions
