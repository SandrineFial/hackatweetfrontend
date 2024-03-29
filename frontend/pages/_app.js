import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user';
const reducers = combineReducers({ user });
const persistConfig = { key: 'hackatweet', storage };
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });
 const persistor = persistStore(store);

import { useEffect, useState } from 'react';
//import WebFont from 'webfontloader'; 

function App({ Component, pageProps }) { /*
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Mont Heavy']
      }
    });
   }, []); */
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Head>
            <title>Hackatweet</title>
          </Head>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
