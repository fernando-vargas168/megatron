import React, { useState, useEffect } from "react";
import { Link, navigate } from "gatsby";
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
  Tab,
  Box,
  ButtonBase,
  MenuItem,
  Menu as MenuResponsive
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import Contact from "./Contact";
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
// const Link = styled(L)`
//   padding: 0 12px;
//   height: 57px;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   ${Responsive.mobile} {
//     width: auto;
//     padding: 4px 16px;
//   }
// `;

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
  const [openContact, setOpenContact] = useState(false);
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
          <MenuMobile
            openContact={openContact}
            setOpenContact={setOpenContact}
          />
        </ResponsiveComponent>
        <ResponsiveComponent tablet desktop>
          <MenuDesktop
            location={location}
            openContact={openContact}
            setOpenContact={setOpenContact}
          />
        </ResponsiveComponent>
      </AppMenu>
      <Contact
        openContact={openContact}
        setOpenContact={setOpenContact}
      ></Contact>
    </div>
  );
};
const MenuDesktop = ({ location, setOpenContact }) => {
  const [value, setValue] = useState(4);
  useEffect(() => {
    const pathname = location.replace(/\//gi, "");
    try {
      switch (pathname) {
        case "servicios":
          setValue(0);
          break;
        case "capacitacion":
          setValue(1);
          break;
        case "trabajo":
          setValue(2);
          break;
        case "contacto":
          setValue(3);
          break;
        default:
          setValue(4);
      }
    } catch (error) {
      console.error("Error en Menu al intentar establecer el pathname");
      console.error(error);
    }
  });
  return (
    <Tabs value={value}>
      />
      <Tab
        onClick={() => navigate("/servicios")}
        label={"Servicios"}
        {...a11yProps(0)}
      />
      <Tab
        onClick={() => navigate("/capacitacion")}
        label={"Capacitacion "}
        {...a11yProps(1)}
      />
      <Tab
        onClick={() => navigate("/trabajo")}
        label={"Trabajo"}
        {...a11yProps(2)}
      />
      <Tab
        onClick={() => setOpenContact(true)}
        label={"Empresa y Contacto"}
        {...a11yProps(3)}
      />
      <Tab
        style={{ marginLeft: "auto" }}
        onClick={() => navigate("/")}
        label={<Logo />}
        {...a11yProps(4)}
      />
    </Tabs>
  );
};

const MenuMobile = ({ setOpenContact }) => {
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
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/servicios");
          }}
        >
          Servicios
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/capacitacion");
          }}
        >
          Capacitacion
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/trabajo");
          }}
        >
          Trabajo
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setOpenContact(true);
          }}
        >
          Empresa y Contacto
        </MenuItem>
      </MenuResponsive>
    </Toolbar>
  );
};

export default Menu;
