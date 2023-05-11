import { configureStore } from "@reduxjs/toolkit";
import {
  //   FLUSH,
  //   PAUSE,
  //   PERSIST,
  //   PURGE,
  //   REGISTER,
  //   REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import authReducer from "./slices/auth.slice";

const rootConfig = {
  key: "todo_web_app_v1",
  storage: localStorage
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(rootConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistedStore = persistStore(store);

//{
// serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// }
