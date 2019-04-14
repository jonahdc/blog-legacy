import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'

export default () => (
  <React.Fragment>
    <Header />
    <Link to={'/'}>Home</Link>
    <div>About</div>
  </React.Fragment>
)
