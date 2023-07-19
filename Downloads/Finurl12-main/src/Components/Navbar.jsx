// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import fi from "../images/fi.png"
// import Button from "./Buttonnav";
// import NavLinks from "./NavLinks";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="root">
//     <nav className="bg-blue ">
//       <div className="flex items-center font-medium justify-around">
//         <div className="z-50 p-5 md:w-auto w-full flex justify-between">
//         <Link to="/">  <img src={fi} alt="logo" className="md:cursor-pointer h-14" /> </Link>
//           <div className="text-3xl md:hidden text-white" onClick={() => setOpen(!open)}>
//             <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
//           </div>
//         </div>
//         <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] text-white z-50 ">
//           <li>
//             <Link to="/" className="py-7 px-3 inline-block">
//               Home
//             </Link>
//             </li>
            
//           <NavLinks />
//           <li><Link to="/About" className="py-7 px-3 inline-block">
//               About Us
//             </Link></li>
//         </ul>
//         <div className="md:block hidden">
//           <Button />
//         </div>
//         {/* Mobile nav */}
//         <ul
//           className={`
//         md:hidden  absolute z-48 bg-black  text-white w-full font-[Poppins]  top-0 overflow-y-auto bottom-0 py-24 pl-4
//         duration-500 ${open ? "left-0" : "left-[-100%]"}
//         `}
//         >
//           <li>
//             <Link to="/" className="py-7 px-3 inline-block">
//               Home
//             </Link>
//           </li>
          
//           <NavLinks />
//           <li><Link to="/About" className="py-7 px-3 inline-block">
//               About Us
//             </Link></li>
//           <div className="py-5">
//             <Button />
//           </div>
//         </ul>
//       </div>
//     </nav>
//     </div>
//   );
// };


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import fi from "../images/fi.png";
// import Button from "./Buttonnav";
// import NavLinks from "./NavLinks";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const toggleMenu = () => {
//     setOpen(!open);
//   };

//   const closeMenu = () => {
//     setOpen(false);
//   };

//   return (
//     <div className="root">
//       <nav className="bg-blue overflow-x-hidden ">
//         <div className="flex items-center font-medium justify-around">
//           <div className="z-50 p-5 md:w-auto w-full flex justify-between">
//             <Link to="/">
//               <img
//                 src={fi}
//                 alt="logo"
//                 className="md:cursor-pointer h-14 overflow-Y-hidden"
//               />
//             </Link>
//             <div
//               className="text-3xl md:hidden text-white"
//               onClick={toggleMenu}
//             >
//               <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
//             </div>
//           </div>
//           <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] text-white z-50">
//             <li>
//               <Link to="/" className="py-7 px-3 inline-block" onClick={closeMenu}>
//                 Home
//               </Link>
//             </li>
//             <NavLinks />
//             <li>
//               <Link to="/About" className="py-7 px-3 inline-block" onClick={closeMenu}>
//                 About Us
//               </Link>
//             </li>
//           </ul>
//           <div className="md:block hidden">
//             <Button />
//           </div>
//           {/* Mobile nav */}
//           <ul
//             className={`
//               md:hidden absolute z-40 bg-black text-white w-full font-[Poppins] top-0 overflow-y-auto bottom-0 py-24 pl-4
//               duration-500 ${open ? "left-0" : "left-[-100%]"}
//             `}
//           >
//             <li>
//               <Link
//                 to="/"
//                 className="py-7 px-3 inline-block"
//                 onClick={closeMenu}
//               >
//                 Home
//               </Link>
//             </li>
//             <NavLinks  />
//             <li>
//               <Link
//                 to="/About"
//                 className="py-7 px-3 inline-block"
//                 onClick={closeMenu}
//               >
//                 About Us
//               </Link>
//             </li>
//             <div className="py-5">
//               <Button />
//             </div>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import fi from "../images/fi.png";
import Button from "./Buttonnav";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="root">
      <nav className="bg-blue overflow-x-hidden ">
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <Link to="/">
              <img
                src={fi}
                alt="logo"
                className="md:cursor-pointer h-14 overflow-Y-hidden"
              />
            </Link>
            <div
              className="text-3xl md:hidden text-white"
              onClick={toggleMenu}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] text-white z-50">
            <li>
              <Link to="/" className="py-7 px-3 inline-block" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link to="/About" className="py-7 px-3 inline-block" onClick={closeMenu}>
                About Us
              </Link>
            </li>
          </ul>
          <div className="md:block hidden">
            <Button />
          </div>
          {/* Mobile nav */}
          <ul
            className={`
              md:hidden absolute z-40 bg-black text-white w-full font-[Poppins] top-0 overflow-y-auto bottom-0 py-24 pl-4
              duration-500 ${open ? "left-0" : "left-[-100%]"}
            `}
          >
            <li>
              <Link
                to="/"
                className="py-7 px-3 inline-block"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <NavLinks  />
            <li>
              <Link
                to="/About"
                className="py-7 px-3 inline-block"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <div className="py-5">
              <Button />
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
