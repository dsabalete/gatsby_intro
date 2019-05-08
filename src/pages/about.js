import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const About = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor amet green juice chia beard, yr gochujang normcore
        pour-over biodiesel. Enamel pin mustache chicharrones, actually
        adaptogen pop-up slow-carb man braid vaporware jean shorts. Poke hella
        dreamcatcher beard, meggings bushwick snackwave. Freegan tofu paleo,
        coloring book woke raw denim leggings chartreuse cardigan kombucha
        portland typewriter fixie. VHS schlitz twee, hashtag celiac microdosing
        normcore migas flannel locavore pug intelligentsia glossier dreamcatcher
        enamel pin. Everyday carry kogi DIY tousled quinoa. Biodiesel yr trust
        fund, readymade cred fixie coloring book kale chips tofu.
      </p>
      <Link to="/">Back to main page</Link>
    </Layout>
  )
}

export default About
