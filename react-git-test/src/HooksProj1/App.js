import React, { useState } from "react";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Dropdown2 from "./components/Dropdown2";
import Translate2 from "./components/Translate2";
import Accordion from "./components/Accordion";
import Route from "./components/Route";
import Header from "./components/Header";

const menuOptions = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

const items = [
  {
    title: "What is React?",
    contents: "React is a front end JS framework",
  },
  {
    title: "Why use React?",
    contents: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    contents: "You use React by creating reusable components",
  },
];

const App = () => {
  const [selected, setSelected] = useState(menuOptions[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  // Routing Components
  // const showAccordion = () => {
  //   if (window.location.pathname === "/") {
  //     return <Accordion items={items} />;
  //   }
  // };
  // // or
  // const showComponent = (route, component) => {
  //   return window.location.pathname === route ? component : null;
  // };

  return (
    <div className="App">
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}

      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown2
          menuOptions={menuOptions}
          selected={selected}
          setSelected={setSelected}
        />
      ) : null} */}
      {/* <Translate2 /> */}

      <Header />
      {/* Routing ----------- */}
      {/* {showAccordion()} */}
      {/* Use Route Component */}
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown2
          label="Select a Color"
          menuOptions={menuOptions}
          selected={selected}
          setSelected={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate2 />
      </Route>
    </div>
  );
};

export default App;
