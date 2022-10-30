
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import styled from 'styled-components'
import AddProduct from "./components/addProduct/AddProduct";
import Address from "./components/address/Address";
import Checkout from "./components/checkout/Checkout";
import Order from "./components/orders/Order";
import Payment from "./components/payment/Payment";
import { Elements } from '@stripe/react-stripe-js'
import {loadStripe} from "@stripe/stripe-js"

function App() {
  const promise = loadStripe(
    "pk_test_51LyjcHBZHrApW1GlQtoOkvjstVha8jiE26mddihasHAHjAKdNkYxUh3PqS27V8jwiXynfJuZfz7tTyH3KaNGGyKS000fH9RmnX"
  );
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/address" element={<Address />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/payment" element={
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        }/>
      </Routes>
    </Container>
  );
}
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    /* display: flex;
    justify-content: center;
    align-items: center; */
`;


export default App;
