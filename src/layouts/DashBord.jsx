import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DashBord = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-[calc(100vh-144px)] lg:min-h-[calc(100vh-200px)] py-10">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default DashBord;
