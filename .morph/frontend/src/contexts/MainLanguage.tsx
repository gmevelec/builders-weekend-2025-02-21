import React, { createContext, useContext, useState, ReactNode } from "react";

// Определяем тип для контекста
interface LanguageType {
  mainLanguage: string;
  setMainLanguage: (language: string) => void;
  targetLanguage: string;
  setTargetLanguage: (language: string) => void;
}

// Создаем контекст
const LanguageContext = createContext<LanguageType | undefined>(undefined);

// Провайдер контекста
interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [mainLanguage, setMainLanguage] = useState<string>(() => {
    return localStorage.getItem("mainLanguageStore") || "";
  });
  // Изначально пустая строка
  const [targetLanguage, setTargetLanguage] = useState<string>(() => {
    return localStorage.getItem("targetLanguageStore") || "";
  });
  // Изначально пустая строка

  return (
    <LanguageContext.Provider
      value={{
        mainLanguage,
        setMainLanguage,
        targetLanguage,
        setTargetLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Хук для использования контекста
export const useLanguageContext = (): LanguageType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
