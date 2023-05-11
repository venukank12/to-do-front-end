import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store, persistedStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <BrowserRouter>
            <SnackbarProvider
              maxSnack={3}
              autoHideDuration={5000}
              TransitionProps={{
                direction: "down",
              }}
              anchorOrigin={{
                horizontal: "center",
                vertical: "top",
              }}
              preventDuplicate={true}
            >
              <App />
            </SnackbarProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
