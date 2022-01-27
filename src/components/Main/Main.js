import React from "react";
import Blogs from "../Blogs/Blogs";
import Sidebar from "../Sidebar/Sidebar";

function Main(props) {
  return (
    <div className="grid grid-cols-4 gap-4 container mx-auto sm:px-12 pt-12 bg-gray-50">
      <Blogs></Blogs>
      <Sidebar></Sidebar>
    </div>
  );
}

export default Main;
