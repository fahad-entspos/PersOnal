import React from 'react'
import { BsFillHexagonFill } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BsCartPlusFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { BsFillShieldSlashFill } from "react-icons/bs";
export default function Navbar() {
  return (
   <>
   
   
   <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} href="https://flowbite.com/" className="flex items-center">
        <BsFillHexagonFill className="w-8 h-8" color='white' gap-2/>  
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </Link>
          <div className="flex items-center gap-5 md:order-2">
            <button type="button" className="flex mr-3 text-sm bg-gray-900 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              
              <span className="sr-only">Open user menu</span>
              <FcLike className="w-9 h-10"  color='#b70000' gap-2/>

              
            </button> 
            
            <button type="button" className="flex mr-3 text-sm  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <Link to={`/Addtocart`}>
              <BsCartPlusFill  className="w-8 h-8" color='white' />
              {/* <img className="w-10 h-10 " src="/asa.png" /> */}
              </Link>
            </button> 
            
            <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              {/* <BsFillShieldSlashFill  className="w-8 h-8" color='white' /> */}
              <img className="w-8  object-coverr h-8 rounded-full" src="/love/love (1).jpg" />
            </button>


            {/* Dropdown menu */}
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to={"/"} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
              </li>
             
              <li>
                <Link to={"/Products"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</Link>
              </li>
              <li>
                <Link to={"/Contact"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
              </li>
              <li>
                <Link to={"/About"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
              </li>
              <li>
                {/* <Link to={"/Signup"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Signup</Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

   
   </>
  )
}








// import { Navbar } from "@nextui-org/react";
// import {  Text, Avatar, Dropdown, Input } from "@nextui-org/react";
// import { Layout } from "./Layout.js";
// import { AcmeLogo } from "./AcmeLogo.js";
// import { SearchIcon } from "./SearchIcon.js";

// export default function App() {
//   return (
//     <Layout>
//       <Navbar isBordered variant="sticky">
//         <Navbar.Brand css={{ mr: "$4" }}>
//           <AcmeLogo />
//           <Text b color="inherit" css={{ mr: "$11" }} hideIn="xs">
//             ACME
//           </Text>
//           <Navbar.Content hideIn="xs" variant="highlight">
//             <Navbar.Link isActive href="#">
//               Dashboard
//             </Navbar.Link>
//             <Navbar.Link href="#">Team</Navbar.Link>
//             <Navbar.Link href="#">Activity</Navbar.Link>
//             <Navbar.Link href="#">Settings</Navbar.Link>
//           </Navbar.Content>
//         </Navbar.Brand>
//         <Navbar.Content
//           css={{
//             "@xsMax": {
//               w: "100%",
//               jc: "space-between",
//             },
//           }}
//         >
//           <Navbar.Item
//             css={{
//               "@xsMax": {
//                 w: "100%",
//                 jc: "center",
//               },
//             }}
//           >
//             <Input
//               clearable
//               contentLeft={
//                 <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
//               }
//               contentLeftStyling={false}
//               css={{
//                 w: "100%",
//                 "@xsMax": {
//                   mw: "300px",
//                 },
//                 "& .nextui-input-content--left": {
//                   h: "100%",
//                   ml: "$4",
//                   dflex: "center",
//                 },
//               }}
//               placeholder="Search..."
//             />
//           </Navbar.Item>
//           <Dropdown placement="bottom-right">
//             <Navbar.Item>
//               <Dropdown.Trigger>
//                 <Avatar
//                   bordered
//                   as="button"
//                   color="primary"
//                   size="md"
//                   src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
//                 />
//               </Dropdown.Trigger>
//             </Navbar.Item>
//             <Dropdown.Menu
//               aria-label="User menu actions"
//               color="secondary"
//               onAction={(actionKey) => console.log({ actionKey })}
//             >
//               <Dropdown.Item key="profile" css={{ height: "$18" }}>
//                 <Text b color="inherit" css={{ d: "flex" }}>
//                   Signed in as
//                 </Text>
//                 <Text b color="inherit" css={{ d: "flex" }}>
//                   zoey@example.com
//                 </Text>
//               </Dropdown.Item>
//               <Dropdown.Item key="settings" withDivider>
//                 My Settings
//               </Dropdown.Item>
//               <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
//               <Dropdown.Item key="analytics" withDivider>
//                 Analytics
//               </Dropdown.Item>
//               <Dropdown.Item key="system">System</Dropdown.Item>
//               <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
//               <Dropdown.Item key="help_and_feedback" withDivider>
//                 Help & Feedback
//               </Dropdown.Item>
//               <Dropdown.Item key="logout" withDivider color="error">
//                 Log Out
//               </Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </Navbar.Content>
//       </Navbar>
//     </Layout>
//   );
// }
