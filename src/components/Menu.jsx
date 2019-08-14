import React, { useState, useEffect } from "react";
import { Link as L } from "gatsby";
import styled from "styled-components";
import { Responsive } from "../styles/vars";
import ResponsiveComponent from "../../lib/ResponsiveComponent";
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
  ButtonBase,
  MenuItem as MI,
  Menu as MenuResponsive
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
  ${Responsive.mobile} {
    flex-direction: row-reverse;
  }
  img {
    max-height: 72px;
  }
  .logotipo {
    width: 150px;
    ${Responsive.miniTablet} {
      display: none;
    }
  }
  .name {
    display: none;
    ${Responsive.mobile} {
      width: 130px;
      margin-left: 10px;
      display: flex;
    }
  }
  .isologo {
    margin-left: 10px;
    width: 50px;
    ${Responsive.miniTablet} {
      margin-left: 0px;
    }
    ${Responsive.mobile} {
      width: 30px;
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
  ${Responsive.mobile} {
    width: auto;
    padding: 4px 16px;
  }
`;
const Tab = styled(T)`
  padding: 0 !important;
`;

const Logo = () => (
  <LogoStyled>
    <img className="logotipo" src="/img/logotipo.png" />
    <img className="name" src="/img/name.png" />
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
        <ResponsiveComponent mobile>
          <MenuMobile />
        </ResponsiveComponent>
        <ResponsiveComponent tablet desktop>
          <MenuDesktop location={location} />
        </ResponsiveComponent>
      </AppMenu>
    </div>
  );
};
const MenuDesktop = ({ location }) => {
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
  return (
    <Tabs value={value}>
      />
      <Tab label={<Link to="/servicios">Servicios</Link>} {...a11yProps(0)} />
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
  );
};

const MenuItem = styled(MI)`
  padding: 0 !important;
`;
const MenuMobile = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <Toolbar>
      <Link style={{ padding: 0 }} to="/">
        <Logo />
      </Link>
      <IconButton
        style={{ marginLeft: "auto" }}
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <MenuResponsive
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/servicios">Servicios</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/cursos">Cursos</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/trabajo">Trabajo</Link>
        </MenuItem>
      </MenuResponsive>
    </Toolbar>
  );
};

export default Menu;
