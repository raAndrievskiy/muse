import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations, type Language, type Translation } from './translations';
export type { Language, Translation } from './translations';
const STORAGE_KEY='muse-language';
const LanguageContext=createContext<{language:Language;setLanguage:(language:Language)=>void;t:Translation}>({language:'ru',setLanguage:()=>undefined,t:translations.ru});
export function LanguageProvider({children}:{children:ReactNode}){const [language,setLanguageState]=useState<Language>(()=>localStorage.getItem(STORAGE_KEY)==='en'?'en':'ru');const setLanguage=(next:Language)=>{setLanguageState(next);localStorage.setItem(STORAGE_KEY,next)};useEffect(()=>{document.documentElement.lang=language},[language]);const value=useMemo(()=>({language,setLanguage,t:translations[language]}),[language]);return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>}
export function useLanguage(){return useContext(LanguageContext)}
