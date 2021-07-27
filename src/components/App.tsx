import React from 'react';
import Footer from './Footer';
import { useReducerAsync } from 'use-reducer-async';
import Header from './Header';
import Main from './Main';
import { resultsState, asyncActionHandlers } from './functions/asynchandlers'

export const ResultsContext = React.createContext(null)

function App() {
  const [results, dispatch] = useReducerAsync(resultsState, [], asyncActionHandlers)

  const resultsContextValues: any = {
    results,
    dispatch
  }

  return (
    <>
      <Header />


      <ResultsContext.Provider
        value={resultsContextValues}
      >
        <Main />
      </ResultsContext.Provider>



      <Footer />
    </>
  )
}

export default App;
