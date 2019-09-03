import React, { useState } from "react";
import {
  Dialog,
  Slide,
  AppBar,
  Button,
  Typography,
  Toolbar,
  IconButton,
  List,
  ListItem,
  Snackbar,
  SnackbarContent,
  Paper,
  Box
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { CopyToClipboard } from "react-copy-to-clipboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import EmailIcon from "@material-ui/icons/Email";
import PinDropIcon from "@material-ui/icons/PinDrop";
import PhoneIcon from "@material-ui/icons/Phone";
import { makeStyles } from "@material-ui/core/styles";
import { Whatsapp, Facebook, Youtube } from "../../lib/icons";
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: "75px",
    margin: "0 16px",
    padding: "16px",
    width: "300px"
  },
  listButton: {
    width: "100%",
    height: "64px"
  },
  icon: {
    marginRight: "7px"
  },
  success: {
    backgroundColor: green[600]
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

const Contact = ({ openContact, setOpenContact }) => {
  const classes = useStyles();
  return (
    <Dialog
      fullScreen
      open={openContact}
      onClose={() => setOpenContact(false)}
      TransitionComponent={Transition}
      // scroll="paper"
    >
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpenContact(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">Contacto Megatron</Typography>
        </Toolbar>
      </AppBar>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            Megatron
          </Typography>
          <Typography component="p">
            Somos una empresa dinámica y distinta dedicada al desarrollo de
            ingeniería, investigación, capacitación y actualización
            características necesarias para avanzar en el área industrial
            BOLIVIANA
          </Typography>
        </Paper>
      </Box>
      <List>
        <ListItemIcon
          buttonStyled={{ background: "#3b5998", color: "white" }}
          icon={<Facebook className={classes.icon}></Facebook>}
          href="https://www.facebook.com/Megatron-1457765754508825/"
        />
        <ListItemIcon
          buttonStyled={{ background: "#282828" }}
          icon={<Youtube className={classes.icon} />}
          href="https://www.youtube.com/channel/UCm9e7feD8F3qrn6hFUX_aIw"
        />
        <ListItemIcon
          value="+591 70497120"
          icon={<Whatsapp className={classes.icon}></Whatsapp>}
          buttonStyled={{ background: "#075e54", color: "white" }}
          href="https://api.whatsapp.com/send?phone=59170497120&text=Hola%20Megatron,%20vengo%20de%20su%20sitio%20web."
        />
        <ListItemIcon
          buttonStyled={{ textTransform: "none" }}
          value="ing_fvargas@hotmail.com"
          icon={<EmailIcon className={classes.icon} />}
          href="mailto:ing_fvargas@hotmail.com"
        />
        <ListItemIcon
          buttonStyled={{ textTransform: "none", height: "75px" }}
          value="Av. Cañoto #113 esq. Buenos Aires | Santa Cruz |
          Bolivia"
          icon={<PinDropIcon className={classes.icon} />}
          href="https://www.google.com/maps/place/Megatron+Empresa+Industrial/@-17.7814131,-63.1908203,17z/data=!3m1!4b1!4m5!3m4!1s0x93f1e9cd70711897:0x7a8e9bc0f6959a56!8m2!3d-17.7814182!4d-63.1886316"
        />
        <ListItemIcon
          value="3303219"
          icon={<PhoneIcon className={classes.icon} />}
          href="tel:3303219"
        />
      </List>
    </Dialog>
  );
};
const ListItemIcon = ({ buttonStyled, icon, value, href }) => {
  const [copied, setCopied] = useState(false);
  const classes = useStyles();
  return (
    <ListItem>
      <Button
        className={classes.listButton}
        style={buttonStyled}
        variant="contained"
        component="a"
        href={href}
      >
        {icon}
        <Typography>{value && value}</Typography>
      </Button>
      {value && (
        <>
          <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
            <IconButton>
              <FileCopyIcon></FileCopyIcon>
            </IconButton>
          </CopyToClipboard>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            open={copied}
            autoHideDuration={3000}
            onClose={() => setCopied(false)}
          >
            <Snack
              className={classes.success}
              message="¡Texto copiado!"
              onClose={() => setCopied(false)}
            ></Snack>
          </Snackbar>
        </>
      )}
    </ListItem>
  );
};
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Snack = ({ className, message, onClose }) => {
  const classes = useStyles();
  return (
    <SnackbarContent
      className={className}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <CheckCircleIcon></CheckCircleIcon>
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};
export default Contact;
