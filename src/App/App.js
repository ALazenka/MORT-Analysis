import React from "react";
import Live from "../Pages/Live/Live";
import Home from "../Pages/Home/Home";
import Result from "../Pages/Result/Result";

export default () => {
  const [currentPage, setCurrentPage] = React.useState("Home");

  if (currentPage === "live") {
    return <Live changePage={setCurrentPage} />;
  } else if (currentPage === "result") {
    return <Result changePage={setCurrentPage} />;
  }
  return <Home changePage={setCurrentPage} />;
};
