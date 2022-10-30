
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import styled from 'styled-components'
import AddProduct from "./components/addProduct/AddProduct";
import Address from "./components/address/Address";
import Checkout from "./components/checkout/Checkout";

function App() {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/address" element={<Address />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/addproduct" element={<AddProduct/> }/>
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
