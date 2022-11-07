import React from "react";
export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "100vh",
    width: "100%",
    backgroundColor: "red",
  };
  return (
    <footer className="bg-dark text-light py-3 px-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; My TodoList.com </p>
    </footer>
  );
};
