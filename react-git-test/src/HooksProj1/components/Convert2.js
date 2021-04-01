import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert2 = ({ language, text }) => {
  const [debouncedText, setDebouncedText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 700);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
    };
    translate();
  }, [language, debouncedText]);

  return <div>{translatedText}</div>;
};

export default Convert2;
