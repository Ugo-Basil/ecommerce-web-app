import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import banner from "../../assets/banner.jpg";
import mobileBanner from "../../assets/mobile_banner.jpg";
import Card from "../../components/card/Card";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Banner>
        <img src={banner} alt="" />
        <img src={mobileBanner} alt="" />
      </Banner>
      <Main>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 247);
`;

const Banner = styled.div`
  width: 100%;
  height: 300px;
  img {
    width: 100%;
    --webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );

    &:nth-child(2) {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        display: block;
        --webkit-mask-image: none;
      }
  }
  }`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  //Tablets
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
    grid-gap: 0;
  }

  @media only screen and (max-width: 767px) {
   margin-top: -130px;
   padding-bottom: 10px 0px;
  }
`;
export default Home;
