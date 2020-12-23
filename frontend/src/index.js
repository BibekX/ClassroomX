import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import theme from "./components/General/Theme/Theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from "./components/Pages/Chatroom/app/store";
=======
// import { createStore } from "redux";
import { Provider } from 'react-redux';
import store from "./components/Pages/Chatroom/app/store";

// import rootReducer from "./reducers/rootReducer";

// const store = createStore(rootReducer);
>>>>>>> 17c8ee0694c5598546feb17ff04ceef99adb7231

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
<<<<<<< HEAD
        <App />
=======
   
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>

>>>>>>> 17c8ee0694c5598546feb17ff04ceef99adb7231
    </React.Fragment>
  </MuiThemeProvider>,
  document.getElementById("root")
);
