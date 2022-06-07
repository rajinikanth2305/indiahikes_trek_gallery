import './App.css';
import {StyledEngineProvider} from '@mui/material/styles'
import React ,{useState} from "react"
import {darkTheme} from "./theme/theme"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline  from '@mui/material/CssBaseline';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/Home"
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <React.Fragment>
          <Router>
            <Sidebar />
            <Switch>
			<Route exact path="/" component={Home} />
			</Switch>
          </Router>
        </React.Fragment>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
