import React, { createContext } from 'react';

export const SurveyContext = createContext({ });

export const SurveyContextProvider = props => {
    return (
        <SurveyContext.Provider value={{}}></SurveyContext.Provider>
    );
};