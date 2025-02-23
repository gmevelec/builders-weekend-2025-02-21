import { useState, useEffect } from "react";
import React from "react";
import "../customComponentsStyle/Languages.css";
import { LanguagesData } from "../assets/data/languages";
import { useLanguageContext } from "../contexts/MainLanguage";

// Define the type for the language object
type Language = {
  code: string;
  name: string;
  flag: string;
};

const Languages = () => {
  // Properly typed useState hooks
  const { mainLanguage, setMainLanguage } = useLanguageContext();
  const { targetLanguage, setTargetLanguage } = useLanguageContext();

  const changeMainLanguage = (language: string) => {
    setMainLanguage(language);
    localStorage.setItem("mainLanguageStore", language);
  };

  const changeTargetLanguage = (language: string) => {
    setTargetLanguage(language);
    localStorage.setItem("targetLanguageStore", language);
  };

  console.log(mainLanguage, "Main");

  console.log(targetLanguage, "target");

  return (
    <div className="languagesPage">
      <div className="selectors-block">
        {/* Main Language Selector */}
        <div>
          <select
            id="main-lang"
            name="languages-option"
            value={mainLanguage || ""}
            onChange={(e) => changeMainLanguage(e.target.value)}
          >
            {LanguagesData.map((item: Language) => (
              <option key={item.code} value={item.code}>
                {item.flag} {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
        />
      </svg>

      <div className="selectors-block">
        {/* Other Language Selector */}
        <div>
          <select
            id="lang-select"
            name="languages-option"
            value={targetLanguage || ""}
            onChange={(e) => changeTargetLanguage(e.target.value)}
          >
            {LanguagesData.map((item: Language) => (
              <option key={item.code} value={item.code}>
                {item.flag} {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Languages;
