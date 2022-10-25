import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar/Navbar'
import banner from '../../assets/banner.jpg'

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Banner>
        <img src={banner} alt="" />
      </Banner>
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
`

const Banner = styled.div`
  width: 100%;
  height: 300px;
  img{
    width: 100%;
    -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,2), rgba(0,0,0,0.95), rgba(0,0,0,0.85), rgba(0,0,0,0.75),rgba(0,0,0,0.55), rgba(0,0,0,0));
  }
`
export default Home