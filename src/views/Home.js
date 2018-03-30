import React from 'react'
import { withRouter } from 'react-router-dom'

const Home = ({history}) => {  
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  )
}

export default withRouter(Home)
