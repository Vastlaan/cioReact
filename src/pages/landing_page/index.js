import React from 'react'
import Header from '../../components/header'
import Cards from '../../components/cards'
import Motivation from '../../components/motivation'
import ImageHeader from '../../img/header-2.jpg'

export default function LandingPage() {
  return (
    <>
      <Header
        title={`Health Survey`}
        description={`Here goes some catchy description of what is it for and how
        it will serve the one who fill this survey as well as whole company in general. Also mention that it is annonymous.`}
        btnLink='/survey'
        btnText='Start Survey'
        image={ImageHeader}
      />

      <Cards />

      <Motivation
        text={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nam, porro ipsum. Aliquam dolorum veritatis facilis repellat consectetur ut odit nihil.`}
      />
    </>
  )
}
