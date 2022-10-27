
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import styled from 'styled-components'
import AddProduct from "./components/addProduct/AddProduct";

function App() {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

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
