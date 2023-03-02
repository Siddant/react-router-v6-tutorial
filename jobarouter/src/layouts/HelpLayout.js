import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className='help-layout'>
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas
        debitis quibusdam deserunt repellat hic molestias ipsum commodi aut
        odit!
      </p>

      <nav>
        {/* 
          we don't need to specify the entire path or rout such as /help/faq 
          only need the path relative to whatever layout or what ever component we're in or the 
          route we are in
        */}
        <NavLink to='faq'>View the FAQ</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}
