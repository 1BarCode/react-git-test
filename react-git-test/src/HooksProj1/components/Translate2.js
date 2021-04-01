import React, { useState } from "react";
import Dropdown2 from "./Dropdown2";
import Convert2 from "./Convert2";

// "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwD1M"

const langOptions = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Vietnamese",
    value: "vi",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Chinese (Traditional)",
    value: "zh-TW",
  },
  {
    label: "Chinese (Simplified)",
    value: "zh-CN",
  },
  {
    label: "German",
    value: "de",
  },
];

const Translate2 = () => {
  const [language, setLanguage] = useState(langOptions[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown2
        label="Select a Language"
        menuOptions={langOptions}
        selected={language}
        setSelected={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert2 language={language} text={text} />
    </div>
  );
};

export default Translate2;
