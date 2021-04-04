import React, { useState } from "react";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Dropdown2 from "./components/Dropdown2";
import Translate2 from "./components/Translate2";
import Accordion from "./components/Accordion";

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
      <Accordion items={items} />
    </div>
  );
};

export default App;
