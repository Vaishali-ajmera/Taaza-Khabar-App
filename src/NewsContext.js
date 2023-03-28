import React, { createContext, useState } from "react";

export const NewsContext = createContext();

export function NewsProvider({ children }) {
    const pageSize = 5;
    const apiKey = process.env.REACT_APP_NEWS_API;
    const [progress, setProgress] = useState(0);

    return(
        <NewsContext.Provider value={{pageSize, apiKey, progress ,setProgress}}>
            {children}
        </NewsContext.Provider>
    )
}