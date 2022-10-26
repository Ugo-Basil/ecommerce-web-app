import React from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Card = () => {
  return (
    <Container>
      <Image>
        <img
          src="https://m.media-amazon.com/images/I/61+SrxoM9lL._AC_UL320_.jpg"
          alt=""
        />
      </Image>
      <Description>
        <h3>PlayStation 4 Slim 1TB Console (Renewed)</h3>

        <Stack spacing={1}>
          {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
        </Stack>
              <p>$299.99</p>
              <button>Add to Cart</button>
      </Description>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  img {
    width: 170px;
    height: 170px;
    object-fit: contain;
  }
`;

const Description = styled.div`
width: 90%;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
flex: 0.7;

h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 10px;
}
p{
    font-size: 1.2rem;
}
button {
    width: 100%;
    height: 40px;
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    font-size: 1.2rem;
    cursor: pointer;
}
`;

export default Card;
