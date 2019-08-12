import React, { useState, useEffect } from "react";
import { Link as L } from "gatsby";
import styled from "styled-components";
import { Responsive } from "../styles/vars";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Tabs,
  Tab as T,
  Box,
  ButtonBase
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const AppMenu = styled(AppBar)`
  max-height: 75px;
`;

const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 72px;
  }
  .logotipo {
    width: 150px;
    ${Responsive.miniTablet} {
      display: none;
    }
  }
  .isologo {
    margin-left: 10px;
    width: 50px;
    ${Responsive.miniTablet} {
      margin-left: 0px;
    }
  }
`;
const Link = styled(L)`
  padding: 0 12px;
  height: 57px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Tab = styled(T)`
  padding: 0 !important;
`;
const Logo = () => (
  <LogoStyled>
    <img className="logotipo" src="/img/logotipo.png" />
    <img className="isologo" src="/img/isologo.png" />
  </LogoStyled>
);
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
const Menu = ({ location }) => {
  const [value, setValue] = useState(3);
  useEffect(() => {
    const pathname = location.replace(/\//gi, "");
    try {
      switch (pathname) {
        case "servicios":
          setValue(0);
          break;
        case "cursos":
          setValue(1);
          break;
        case "trabajo":
          setValue(2);
          break;
        default:
          setValue(3);
      }
    } catch (error) {
      console.error("Error en Menu al intentar establecer el pathname");
      console.error(error);
    }
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <div
      style={{ height: "57px !important", maxHeight: "57px" }}
      className={classes.root}
    >
      <AppMenu
        style={{ height: "57px !important", maxHeight: "57px" }}
        position="static"
        color="inherit"
      >
        <Tabs value={value}>
          />
          <Tab
            label={<Link to="/servicios">Servicios</Link>}
            {...a11yProps(0)}
          />
          <Tab label={<Link to="/cursos">Cursos </Link>} {...a11yProps(1)} />
          <Tab label={<Link to="/trabajo">Trabajo</Link>} {...a11yProps(2)} />
          <Tab
            style={{ marginLeft: "auto" }}
            label={
              <Link to="/">
                <Logo />
              </Link>
            }
            {...a11yProps(3)}
          />
        </Tabs>
      </AppMenu>
    </div>
  );
};

export default Menu;
