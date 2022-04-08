import { Link } from "react-router-dom";
import styled from "styled-components";
import "./nav.css"

const Div = styled.nav`
position:fixed;
display: flex;
padding:5px 10px;
width: 100%;
height:100px;
top: 0;
margin-left: 5%;
right: 0;
align-items: center;
background-color:#901045;;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 80px 60px rgba(0, 0, 0, 0.10)
`

export const Navbar=()=> {
  return (
    <>
    <Div className="nav">
        <Link to=""><img className="img1" src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105800/298.png" alt="logo" /></Link>
        <p style={{color: '#FEFEFE'}}>The Hunger Games</p>
        <Link to="/add" style={{ marginLeft: "20%",fontSize: "3vw",color: '#FEFEFE'}}>Add Hotel+</Link>
          
    </Div>          
    </>
  );
}