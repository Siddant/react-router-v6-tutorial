import { Link, useRouteError } from 'react-router-dom'

export default function CareersError() {
  // this hooks allows to access errors found on the route loader
  const error = useRouteError()

  return (
    <div className='careers-error'>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to='/'>Back to the Homepage</Link>
    </div>
  )
}
