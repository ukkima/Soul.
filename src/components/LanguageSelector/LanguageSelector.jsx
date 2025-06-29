import { useState } from "react";
import cls from "./languageselector.module.scss";
import { Globe, ChevronDown, ChevronUp } from "lucide-react";

const data = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "ru",
    label: "Russian",
  },
];

export const LanguageSelector = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={cls.LanguageSelector}>
      <button onClick={() => setIsOpen(!isOpen)} className={cls.selector_label}>
        <span className={cls.selector_label__content}>
          <Globe />
          {selectedOption ? selectedOption.label : "English"}
        </span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isOpen && (
        <div className={cls.selector_options}>
          {data.map((option) => {
            return (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className={cls.option_button}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
