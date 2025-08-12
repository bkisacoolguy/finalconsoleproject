import { combineReducers, configureStore } from "@reduxjs/toolkit";
import colorSlicereducer from "./colorSlice"
import projectreducer from "./projectSlice"
import usagereducer from"./usageSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import cloudSlicereducer from "./cloudSlice"
import usermanagementSlicereducer from "./UsermanagementSlice.js"
import loginSlicereducer from "./loginSlice.js"

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer =combineReducers({
  color:colorSlicereducer,
  project:projectreducer,
  usage: usagereducer,
  cloudSlice: cloudSlicereducer,
  usermanagement: usermanagementSlicereducer,
  loginSlice : loginSlicereducer,
});

 const persistedReducer = persistReducer(persistConfig, rootReducer)

 let reduxstore =configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }),
 })

 
let persistor = persistStore(reduxstore);
export { reduxstore, persistor };