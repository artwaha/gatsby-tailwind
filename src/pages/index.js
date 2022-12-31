import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p className='font-mono font-bold italic'>If there's an Address, we'll find it..!</p>
      <StaticImage alt="If there's an Address, we'll find it" src="../images/home.jpg" />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage