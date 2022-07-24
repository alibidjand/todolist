import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { AuthProvider } from "./hook/useAuth";
import reportWebVitals from "./reportWebVitals";
import store, { persistor } from "./state/redux/api/store";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);

reportWebVitals();
