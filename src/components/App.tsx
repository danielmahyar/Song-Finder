import React from 'react';
import Footer from './Footer';
import { useReducerAsync } from 'use-reducer-async';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import Main from './pages/Main';
import { resultsState, asyncActionHandlers } from './functions/asynchandlers'
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import ArtistPage from './pages/ArtistPage';
import PageNotFound from './pages/PageNotFound';

export const ResultsContext = React.createContext(null)

function App() {
  const [results, dispatch] = useReducerAsync(resultsState, [], asyncActionHandlers)
  const location = useLocation()

  const resultsContextValues: any = {
    results,
    dispatch
  }

  const routes = [
    {
      path: '/',
      component: () => (
        <motion.div 
          initial={{ translateX: -10000 }} 
          animate={{ translateX: 0 }} 
          exit={{ translateX: -10000 }} 
          transition={{ duration: .65 }}
        >
          <Main />
        </motion.div>
      ),
      isExact: true
    },
    {
      path: '/artist/:id',
      component: () => (
        <motion.div 
          initial={{ translateX: 10000 }} 
          animate={{ translateX: 0 }} 
          exit={{ translateX: 10000 }} 
          transition={{ duration: .75 }}
        >
          <ArtistPage />
        </motion.div>
      ),
      isExact: true
    },
    {
      path: '*',
      component: () => <PageNotFound />,
      isExact: false
    },

  ]

  //Test
  return (
    <>
      <Header />
      
      <ResultsContext.Provider
        value={resultsContextValues}
      >
        <AnimatePresence exitBeforeEnter={true} initial={true}>
          <Switch location={location} key={location.pathname}>

            {routes.map( (route, index) => {
              return (
                <Route key={index++} exact={route.isExact} path={route.path}>
                    {route.component}
                </Route>
              )})}

          </Switch>
        </AnimatePresence>
      </ResultsContext.Provider>
                
      <Footer />
    </>
  )
}

export default App;

