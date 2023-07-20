// import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import "./NavBar.css";
// import logo from "../../images/logo.jpg";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { Nav2 } from "./Nav2";

// // import logo from '../../images/logo.png'

// import { useNavigate } from "react-router-dom";

// export function NavBar({visible = true}) {
//   const currentpage = window.location.pathname.split('/')[1];
//   const navigate = useNavigate();
//   const [query, setQuery] = useState("");
//   const handleLinkClick = (href) => {
    
//     navigate(href);
//   };

//   const linkStyle = {
//     padding: "0.5rem 2.1rem",
//     borderRight: "1px solid white",
//   };

//   return (
//     <div>
//       <div
//         style={{
//           height: "60px",
//           width: "100%",
//           backgroundColor: "rgb(0, 0, 0)",
//         }}
//       >
//         <Container fluid className="px-0">
//           <Nav
//             className="me-auto hider"
//             style={{
//               display: "flex",
//               flexWrap: "nowrap",
//               alignItems: "center",
//               width: "100%",
//               justifyContent: "space-between",
//             }}
//           >
//             <a style={{ paddingLeft: "2%" }} href={"/profile"}>
//               <AccountCircleOutlinedIcon style={{ color: "#fff" }} />
//             </a>
//             <a
//               style={{ paddingLeft: "2%" }}
//               onClick={() => {
//                 navigate("/Bag");
//               }}
//             >
//               <ShoppingBagOutlinedIcon style={{ color: "#fff" }} />
//             </a>
//             <a href={"/favorites"} style={{ paddingLeft: "2%" }}>
//               <FavoriteBorderOutlinedIcon style={{ color: "#fff" }} />
//             </a>

//             <div style={container}>
//               <div style={{ color: "#fff" }}>
//                 <SearchOutlinedIcon style={{ color: "#000" }} />
//               </div>
//               <input
//                 style={{
//                   color: "#000",
//                   border: "none",
//                   outline: "none",
//                   textAlign: "right",
//                   background: "#fff",
//                   borderRadius: "25px",
//                   width: "100%",
//                 }}
//                 value={query}
//                 onChange={(e) => {
//                   setQuery(e.target.value);
//                 }}
//               />
//             </div>
//             {/* <div href={"#cart"} style={{marginLeft:'3%'}} onClick={() => setShow(false)}><ShoppingBagOutlinedIcon /></div>  */}
//             <div className="hell" style={{width:"50%",display:"flex",flexDirection:"row" ,overflowY:"auto"}}>
//               <div
//                 href="/premiumCategory"
//                 style={{
//                   ...linkStyle,
//                   background:
//                     currentpage === "premiumCategory"
//                       ? "white"
//                       : "transparent",
//                   color:
//                     currentpage === "premiumCategory"
//                       ? "black"
//                       : "white",
//                 }}
//                 onClick={() => handleLinkClick("/premiumCategory")}
//                 className="navhover navclick"
//               >
//                 Premium
//               </div>
//               <div
//                 href="/kids"
//                 style={{
//                   ...linkStyle,
//                   background:
//                     currentpage === "kids"
//                       ? "white"
//                       : "transparent",
//                   color:
//                     currentpage === "kids" ? "black" : "white",
//                 }}
//                 onClick={() => handleLinkClick("/kids")}
//                 className="navhover navclick"
//               >
//                 Kids
//               </div>
//               <div
//               className="navhover navclick"
//                 href="/beauty"
//                 style={{
//                   ...linkStyle,
//                   background:
//                     currentpage === "beauty"
//                       ? "white"
//                       : "transparent",
//                   color:
//                     currentpage === "beauty" ? "black" : "white",
//                   whiteSpace: "nowrap",
//                 }}
//                 onClick={() => handleLinkClick("/beauty")}
//               >
//                 Beauty
//               </div>
//               <div
//                 href="/"
//                 style={{
//                   ...linkStyle,
//                   background:
//                     currentpage === "men"
//                       ? "white"
//                       : "transparent",
//                   color:
//                     currentpage === "men"
//                       ? "black"
//                       : "white",
//                 }}
//                 onClick={() => handleLinkClick("/men")}
//                 className="navhover navclick"
//               >
//                 Men
//               </div>
//               <div
//                 href="/women"
//                 style={{
//                   ...linkStyle,
//                   background:
//                     currentpage === "women"
//                       ? "white"
//                       : "transparent",
//                   color:
//                     currentpage === "women" ? "black" : "white",
//                   whiteSpace: "nowrap",
//                 }}
//                 onClick={() => handleLinkClick("/women")}
//                 className="navhover navclick"
//               >
//                 Women
//               </div>
//             </div>
//             <Navbar.Brand>
              
//                 <div 
//                     onClick={() => {
//                       navigate("/", { replace: true });
//                     }}
//                     height={"100%"}
//                     width={"60px"}
//                     style={{display:"flex", marginRight: "10px",color:"white" }}
//                   >
//                     <img src={logo} style={{height:"50px"}}></img>
//                 </div>
//             </Navbar.Brand>
//           </Nav>
//         </Container>
//       </div>
//       {visible && <Nav2 current_page={currentpage + '/'}></Nav2>}
//     </div>
//   );
// }
// const container = {
//   display: "flex",
//   backgroundColor: "white",
//   paddingRight: "3%",
//   marginRight: "3%",
//   marginLeft: "3%",
//   borderRadius: 50,
// };


/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import logo from "../../images/logo.jpg";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Nav2 } from "./Nav2";

import { useNavigate } from "react-router-dom";


function ResponsiveNavbar({ onMenuClick }) {
  return (
    // The mobile-friendly version of the navbar
    <Nav className="mobile-navbar">
      {/* Add your navigation links here */}
      <Nav.Link onClick={() => onMenuClick("/premiumCategory")}>Premium</Nav.Link>
      <Nav.Link onClick={() => onMenuClick("/kids")}>Kids</Nav.Link>
      <Nav.Link onClick={() => onMenuClick("/beauty")}>Beauty</Nav.Link>
      <Nav.Link onClick={() => onMenuClick("/men")}>Men</Nav.Link>
      <Nav.Link onClick={() => onMenuClick("/women")}>Women</Nav.Link>
    </Nav>
  );
}

export function NavBar({visible = true}) {
  const currentpage = window.location.pathname.split('/')[1];
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleLinkClick = (href) => {
    
    navigate(href);
  };

  const linkStyle = {
    padding: "0.5rem 2.1rem",
    borderRight: "1px solid white",
  };

  return (
    <div>
      <div
        style={{
          height: "60px",
          width: "100%",
          backgroundColor: "rgb(0, 0, 0)",
        }}
      >
        <Container fluid className="px-0">
          <Nav
            className="me-auto hider"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <a style={{ paddingLeft: "2%" }} href={"/profile"}>
              <AccountCircleOutlinedIcon style={{ color: "#fff" }} />
            </a>
            <a
              style={{ paddingLeft: "2%" }}
              onClick={() => {
                navigate("/Bag");
              }}
            >
              <ShoppingBagOutlinedIcon style={{ color: "#fff" }} />
            </a>
            <a href={"/favorites"} style={{ paddingLeft: "2%" }}>
              <FavoriteBorderOutlinedIcon style={{ color: "#fff" }} />
            </a>

            <div style={container}>
              <div style={{ color: "#fff" }}>
                <SearchOutlinedIcon style={{ color: "#000" }} />
              </div>
              <input
                style={{
                  color: "#000",
                  border: "none",
                  outline: "none",
                  textAlign: "right",
                  background: "#fff",
                  borderRadius: "25px",
                  width: "100%",
                }}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </div>
            {/* <div href={"#cart"} style={{marginLeft:'3%'}} onClick={() => setShow(false)}><ShoppingBagOutlinedIcon /></div>  */}
            <div className="hell" style={{width:"50%",display:"flex",flexDirection:"row" ,overflowY:"auto"}}>
              <div
                href="/premiumCategory"
                style={{
                  ...linkStyle,
                  background:
                    currentpage === "premiumCategory"
                      ? "white"
                      : "transparent",
                  color:
                    currentpage === "premiumCategory"
                      ? "black"
                      : "white",
                }}
                onClick={() => handleLinkClick("/premiumCategory")}
                className="navhover navclick"
              >
                Premium
              </div>
              <div
                href="/kids"
                style={{
                  ...linkStyle,
                  background:
                    currentpage === "kids"
                      ? "white"
                      : "transparent",
                  color:
                    currentpage === "kids" ? "black" : "white",
                }}
                onClick={() => handleLinkClick("/kids")}
                className="navhover navclick"
              >
                Kids
              </div>
              <div
              className="navhover navclick"
                href="/beauty"
                style={{
                  ...linkStyle,
                  background:
                    currentpage === "beauty"
                      ? "white"
                      : "transparent",
                  color:
                    currentpage === "beauty" ? "black" : "white",
                  whiteSpace: "nowrap",
                }}
                onClick={() => handleLinkClick("/beauty")}
              >
                Beauty
              </div>
              <div
                href="/"
                style={{
                  ...linkStyle,
                  background:
                    currentpage === "men"
                      ? "white"
                      : "transparent",
                  color:
                    currentpage === "men"
                      ? "black"
                      : "white",
                }}
                onClick={() => handleLinkClick("/men")}
                className="navhover navclick"
              >
                Men
              </div>
              <div
                href="/women"
                style={{
                  ...linkStyle,
                  background:
                    currentpage === "women"
                      ? "white"
                      : "transparent",
                  color:
                    currentpage === "women" ? "black" : "white",
                  whiteSpace: "nowrap",
                }}
                onClick={() => handleLinkClick("/women")}
                className="navhover navclick"
              >
                Women
              </div>
            </div>
            <Navbar.Brand>
              
                <div 
                    onClick={() => {
                      navigate("/", { replace: true });
                    }}
                    height={"100%"}
                    width={"60px"}
                    style={{display:"flex", marginRight: "10px",color:"white" }}
                  >
                    <img src={logo} style={{height:"50px"}}></img>
                </div>
            </Navbar.Brand>
          </Nav>
        </Container>
      </div>
      {visible && <Nav2 current_page={currentpage + '/'}></Nav2>}
    </div>
  );
}
const container = {
  display: "flex",
  backgroundColor: "white",
  paddingRight: "3%",
  marginRight: "3%",
  marginLeft: "3%",
  borderRadius: 50,
};
//////////////////////////////////////////////


// import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import "./NavBar.css";
// import logo from "../../images/logo.jpg";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { Nav2 } from "./Nav2";

// // import logo from '../../images/logo.png'

// import { useNavigate } from "react-router-dom";

// export function NavBar({visible = true}) {
//   const currentpage = window.location.pathname.split('/')[1];
//   const navigate = useNavigate();
//   const [query, setQuery] = useState("");
//   const handleLinkClick = (href) => {
    
//     navigate(href);
//   };

//   const linkStyle = {
//     padding: "0.5rem 2.1rem",
//     borderRight: "1px solid white",
//   };

//   return (
//     <div>
//       <div
//         style={{
//           height: "60px",
//           width: "100%",
//           backgroundColor: "rgb(0, 0, 0)",
//         }}
//       >
//         <Container fluid className="px-0">
//           <Nav
//             className="me-auto hider"
//             style={{
//               display: "flex",
//               flexWrap: "nowrap",
//               alignItems: "center",
//               width: "100%",
//               justifyContent: "space-between",
//             }}
//           >
            
//             <a style={{ paddingLeft: "2%" }} href={"/profile"}>
//               <AccountCircleOutlinedIcon style={{ color: "#fff" }} />
//             </a>
//             <a
//               style={{ paddingLeft: "2%" }}
//               onClick={() => {
//                 navigate("/Bag");
//               }}
//             >
//               <ShoppingBagOutlinedIcon style={{ color: "#fff" }} />
//             </a>
//             <a href={"/favorites"} style={{ paddingLeft: "2%" }}>
//               <FavoriteBorderOutlinedIcon style={{ color: "#fff" }} />
//             </a>

//             <div style={container}>
//               <div style={{ color: "#fff" }}>
//                 <SearchOutlinedIcon style={{ color: "#000" }} />
//               </div>
//               <input
//                 style={{
//                   color: "#000",
//                   border: "none",
//                   outline: "none",
//                   textAlign: "right",
//                   background: "#fff",
//                   borderRadius: "25px",
//                   width: "100%",
//                 }}
//                 value={query}
//                 onChange={(e) => {
//                   setQuery(e.target.value);
//                 }}
//               />
//             </div>
//             {/* <div href={"#cart"} style={{marginLeft:'3%'}} onClick={() => setShow(false)}><ShoppingBagOutlinedIcon /></div>  */}
//             <div className="hell" style={{width:"50%",display:"flex",flexDirection:"row" ,overflowY:"auto"}}>
//               <div
//                 href="/premiumCategory"
//                 style={{
//                   ...linkStyle,
//                   background:
//                     currentpage === "premiumCategory"
//                       ? "white"
//                       : "transparent",
//                   color:
//                     currentpage === "premiumCategory"
//                       ? "black"
//                       : "white",
//                 }}
//                 onClick={() => handleLinkClick("/premiumCategory")}
//                 className="navhover navclick"
//               >
//                 Premium
//               </div>
//               <div
//                 href="/kids"
//                 style={{
//                   ...linkStyle,
//                   background:
//                     currentpage === "kids"
//                       ? "white"
//                       : "transparent",
//                   color:
//                     currentpage === "kids" ? "black" : "white",
//                 }}
//                 onClick={() => handleLinkClick("/kids")}
//                 className="navhover navclick"
//               >
//                 Kids
//               </div>
//               <div
//               className="navhover navclick"
//                 href="/beauty"
//                 style={{
//                   ...linkStyle,
//                   background:
//                     currentpage === "beauty"
//                       ? "white"
//                       : "transparent",
//                   color:
//                     currentpage === "beauty" ? "black" : "white",
//                   whiteSpace: "nowrap",
//                 }}
//                 onClick={() => handleLinkClick("/beauty")}
                
//               >
//                 Beauty
//               </div>
//               <div
//                 href="/"
//                 style={{
//                   ...linkStyle,
//                   background:
//                     currentpage === "men"
//                       ? "white"
//                       : "transparent",
//                   color:
//                     currentpage === "men"
//                       ? "black"
//                       : "white",
//                 }}
//                 onClick={() => handleLinkClick("/men")}
//                 className="navhover navclick"
//               >
//                 Men
//               </div>
//               <div
//                 href="/women"
//                 style={{
//                   ...linkStyle,
//                   background:
//                     currentpage === "women"
//                       ? "white"
//                       : "transparent",
//                   color:
//                     currentpage === "women" ? "black" : "white",
//                   whiteSpace: "nowrap",
//                 }}
//                 onClick={() => handleLinkClick("/women")}
//                 className="navhover navclick"
//               >
//                 Women
//               </div>
//             </div>
//             <Navbar.Brand>
              
//                 <div 
//                     onClick={() => {
//                       navigate("/", { replace: true });
//                     }}
//                     height={"100%"}
//                     width={"60px"}
//                     style={{display:"flex", marginRight: "10px",color:"white" }}
//                   >
//                     <img src={logo} style={{height:"50px"}}></img>
//                 </div>
//             </Navbar.Brand>
//           </Nav>
//         </Container>
//       </div>
//       {visible && <Nav2 current_page={currentpage + '/'}></Nav2>}
//     </div>
//   );
// }





// import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import "./NavBar.css";
// import logo from "../../images/logo.jpg";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { Nav2 } from "./Nav2";
// import { useNavigate } from "react-router-dom";

// export function NavBar({ visible = true }) {
//   const currentpage = window.location.pathname.split("/")[1];
//   const navigate = useNavigate();
//   const [query, setQuery] = useState("");
//   const [showNav, setShowNav] = useState(false);
//   const handleLinkClick = (href) => {
//     navigate(href);
//     setShowNav(false);
//   };

//   const linkStyle = {
//     padding: "0.5rem 2.1rem",
//     borderRight: "1px solid white",
//   };

//   return (
//     <>
//       <Navbar
//         collapseOnSelect
//         expand="md"
//         bg="dark"
//         variant="dark"
//         sticky="top"
//       >
//         <Container fluid>
//           <Navbar.Brand href="/">
//             <img src={logo} height="50" alt="Logo" />
//           </Navbar.Brand>
//           <Navbar.Toggle
//             aria-controls="responsive-navbar-nav"
//             onClick={() => setShowNav(!showNav)}
//           />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto hider" style={{ width: "100%" }}>
//               <Nav.Link href="/profile">
//                 <AccountCircleOutlinedIcon style={{ color: "#fff" }} />
//               </Nav.Link>
//               <Nav.Link onClick={() => navigate("/Bag")}>
//                 <ShoppingBagOutlinedIcon style={{ color: "#fff" }} />
//               </Nav.Link>
//               <Nav.Link href="/favorites">
//                 <FavoriteBorderOutlinedIcon style={{ color: "#fff" }} />
//               </Nav.Link>
//               <div style={container}>
//                 <div style={{ color: "#fff" }}>
//                   <SearchOutlinedIcon style={{ color: "#000" }} />
//                 </div>
//                 <input
//                   style={{
//                     color: "#000",
//                     border: "none",
//                     outline: "none",
//                     textAlign: "right",
//                     background: "#fff",
//                     borderRadius: "25px",
//                     width: "100%",
//                   }}
//                   value={query}
//                   onChange={(e) => {
//                     setQuery(e.target.value);
//                   }}
//                 />
//               </div>
//               <Nav.Link href="/premiumCategory" className="navclick">
//                 Premium
//               </Nav.Link>
//               <Nav.Link href="/kids" className="navclick">
//                 Kids
//               </Nav.Link>
//               <Nav.Link href="/beauty" className="navclick">
//                 Beauty
//               </Nav.Link>
//               <Nav.Link href="/men" className="navclick">
//                 Men
//               </Nav.Link>
//               <Nav.Link href="/women" className="navclick">
//                 Women
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       {visible && (
//         <>
//           <div
//             className="nav-trigger"
//             onClick={() => setShowNav(!showNav)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//           <div
//             className={`nav-links ${showNav ? "show-nav" : ""}`}
//             onClick={() => setShowNav(false)}
//           >
//             <div
//               href="/premiumCategory"
//               style={{
//                 ...linkStyle,
//                 background:
//                   currentpage === "premiumCategory"
//                     ? "white"
//                     : "transparent",
//                 color:
//                   currentpage === "premiumCategory" ? "black" : "white",
//               }}
//               onClick={() => handleLinkClick("/premiumCategory")}
//               className="navhover navclick"
//             >
//               Premium
//             </div>
//             <div
//               href="/kids"
//               style={{
//                 ...linkStyle,
//                 background:
//                   currentpage === "kids" ? "white" : "transparent",
//                 color: currentpage === "kids" ? "black" : "white",
//               }}
//               onClick={() => handleLinkClick("/kids")}
//               className="navhover navclick"
//             >
//               Kids
//             </div>
//             <div
//               href="/beauty"
//               style={{
//                 ...linkStyle,
//                 background:
//                   currentpage === "beauty" ? "white" : "transparent",
//                 color: currentpage === "beauty" ? "black" : "white",
//               }}
//               onClick={() => handleLinkClick("/beauty")}
//               className="navhover navclick"
//             >
//               Beauty
//             </div>
//             <div
//               href="/"
//               style={{
//                 ...linkStyle,
//                 background: currentpage === "men" ? "white" : "transparent",
//                 color: currentpage === "men" ? "black" : "white",
//               }}
//               onClick={() => handleLinkClick("/men")}
//               className="navhover navclick"
//             >
//               Men
//             </div>
//             <div
//               href="/women"
//               style={{
//                 ...linkStyle,
//                 background:
//                   currentpage === "women" ? "white" : "transparent",
//                 color: currentpage === "women" ? "black" : "white",
//               }}
//               onClick={() => handleLinkClick("/women")}
//               className="navhover navclick"
//             >
//               Women
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }


// import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import "./NavBar.css";
// import logo from "../../images/logo.jpg";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import { Nav2 } from "./Nav2";

// import { useNavigate } from "react-router-dom";

// export function NavBar({ visible = true }) {
//   const currentpage = window.location.pathname.split("/")[1];
//   const navigate = useNavigate();
//   const [query, setQuery] = useState("");
//   const [showHell, setShowHell] = useState(false);

//   const handleLinkClick = (href) => {
//     navigate(href);
//     setShowHell(false);
//   };

//   const linkStyle = {
//     padding: "0.5rem 2.1rem",
//     borderRight: "1px solid white",
//   };

//   return (
//     <div>
//       <div
//         className="d-flex align-items-center justify-content-between"
//         style={{
//           height: "60px",
//           backgroundColor: "rgb(0, 0, 0)",
//         }}
//       >
//         <div className="d-flex align-items-center">
//           <a style={{ paddingLeft: "2%" }} href={"/profile"}>
//             <AccountCircleOutlinedIcon style={{ color: "#fff" }} />
//           </a>
//           <a
//             style={{ marginLeft: "2%" }}
//             onClick={() => {
//               navigate("/Bag");
//             }}
//           >
//             <ShoppingBagOutlinedIcon style={{ color: "#fff" }} />
//           </a>
//           <a href={"/favorites"} style={{ marginLeft: "2%" }}>
//             <FavoriteBorderOutlinedIcon style={{ color: "#fff" }} />
//           </a>
//         </div>

//         <div className="d-flex align-items-center">
//           <div style={container}>
//             <div style={{ color: "#fff" }}>
//               <SearchOutlinedIcon style={{ color: "#000" }} />
//             </div>
//             <input
//               style={{
//                 color: "#000",
//                 border: "none",
//                 outline: "none",
//                 textAlign: "right",
//                 background: "#fff",
//                 borderRadius: "25px",
//                 width: "100%",
//               }}
//               value={query}
//               onChange={(e) => {
//                 setQuery(e.target.value);
//               }}
//             />
//           </div>
//           {/* Toggle button */}
//           <div
//             className="d-lg-none ms-2"
//             onClick={() => setShowHell(!showHell)}
//           >
//             Toggle
//           </div>
//         </div>
//       </div>

//       <div className="d-none d-lg-block">
//         <Navbar
//           className="justify-content-center"
//           style={{
//             backgroundColor: "rgb(0, 0, 0)",
//             height: "100px",
//             paddingLeft: "2%",
//           }}
//         >
//           <a href="/">
//             <img src={logo} alt="logo" style={{ height: "100px" }} />
//           </a>
//         </Navbar>
//       </div>

//       {/* "hell" class */}
//       <div
//         className={`d-lg-flex ${
//           showHell ? "justify-content-end" : "justify-content-center"
//         }`}
//         style={{
//           position: "absolute",
//           top: "60px",
//           left: "0",
//           right: "0",
//           backgroundColor: "rgb(0, 0, 0)",
//           height: showHell ? "auto" : "0",
//           overflow: "hidden",
//           transition: "height 0.3s ease-in-out",
//         }}
//       >
//         <div
//           className="d-flex flex-column flex-lg-row justify-content-center align-items-center"
//           style={{ width: "100%" }}
//         >
//           <div
//             href="/premiumCategory"
//             style={{
//               ...linkStyle,
//               background:
//                 currentpage === "premiumCategory" ? "white" : "transparent",
//               color: currentpage === "premiumCategory" ? "black" : "white",
//             }}
//             onClick={() => handleLinkClick("/premiumCategory")}
//             className="navhover navclick"
//           >
//             Premium
//           </div>
//           <div
//             href="/kids"
//             style={{
//               ...linkStyle,
//               background: currentpage === "kids" ? "white" : "transparent",
//               color: currentpage === "kids" ? "black" : "white",
//             }}
//             onClick={() => handleLinkClick("/kids")}
//             className="navhover navclick"
//           >
// Kids
//           </div>
//           <div
//             className="navhover navclick"
//             href="/beauty"
//             style={{
//               ...linkStyle,
//               background: currentpage === "beauty" ? "white" : "transparent",
//               color: currentpage === "beauty" ? "black" : "white",
//               whiteSpace: "nowrap",
//             }}
//             onClick={() => handleLinkClick("/beauty")}
//           >
//             Beauty
//           </div>
//           <div
//             href="/"
//             style={{
//               ...linkStyle,
//               background: currentpage === "men" ? "white" : "transparent",
//               color: currentpage === "men" ? "black" : "white",
//             }}
//             onClick={() => handleLinkClick("/men")}
//             className="navhover navclick"
//           >
//             Men
//           </div>
//           <div
//             href="/women"
//             style={{
//               ...linkStyle,
//               background: currentpage === "women" ? "white" : "transparent",
//               color: currentpage === "women" ? "black" : "white",
//               whiteSpace: "nowrap",
//             }}
//             onClick={() => handleLinkClick("/women")}
//             className="navhover navclick"
//           >
//             Women
//           </div>
//         </div>
//       </div>
      
//       {/* "Nav2" component */}
//       {visible && <Nav2 current_page={currentpage + "/"}></Nav2>}
//     </div>
//   );
// }

// const container = {
//   display: "flex",
//   backgroundColor: "white",
//   paddingRight: "3%",
//   marginRight: "3%",
//   marginLeft: "3%",
//   borderRadius: 50,
// };