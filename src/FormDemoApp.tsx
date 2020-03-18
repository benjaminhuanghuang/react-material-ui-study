import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

//
import {
  SignUpForm,
  MaterialUISignUpForm
} from "./forms"


function App() {
  
  return (
    <MaterialUISignUpForm/>
  );
}

export default App;
