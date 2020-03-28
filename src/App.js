import React from "react";
import "./App.css";

import Demographic from "./FormPages/Demographic";
import Quarantine from "./FormPages/Quarantine";
import Submit from "./FormPages/Submit";

const FormPages = {
  Demographic: Demographic,
  Quarantine: Quarantine,
  Submit: Submit
};

function App() {
  var [currentPage, setCurrentPage] = React.useState(0);

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function previousPage() {
    setCurrentPage(currentPage - 1);
  }

  function showPages() {
    return Object.keys(FormPages).map((key, i) => {
      var page = FormPages[key];
      if (i === currentPage) {
        return page({ nextPage: nextPage });
      } else {
        return (
          <div style={{ display: "none" }} key={i}>
            {page({ nextPage: nextPage })}
          </div>
        );
      }
    });
  }

  function showBack() {
    if (currentPage > 0) {
      return <button onClick={() => previousPage()}>{window.i86n['Back']}</button>;
    } else {
      return "";
    }
  }

  function showBreadcrumbs() {
    return Object.keys(FormPages).map((key, i) => {
      if (currentPage === i) {
        return (
          <button onClick={() => setCurrentPage(i)} style={{ color: "blue" }}>
            {key}
          </button>
        );
      } else {
        return <button onClick={() => setCurrentPage(i)}>{key}</button>;
      }
    });
  }

  return (
    <form className="App">
      <div className="Header">
        <div className="Row">
      {showBack()} 
          <div className="BreadCrumbs">{showBreadcrumbs()}</div>
        </div>
      </div>
      {showPages()}
    </form>
  );
}

export default App;
