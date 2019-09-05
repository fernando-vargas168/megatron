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
  Box,
  Grid
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
import { contacto as contact } from "../../site-config/site-config";

const useStyles = makeStyles(theme => ({
  paper: {
    // width: "300px"
    padding: "16px",
    margin: "8px 0"
  },
  listButton: {
    width: "100%",
    height: "64px"
  },
  icon: {
    marginRight: "7px"
  },
  gridPaper: {
    margin: "0 16px",
    marginTop: "75px",
    maxWidth: "calc(100% - 80px)"
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
      <Grid container className={classes.gridPaper}>
        {contact.info.map((e, i) => (
          <Grid item xs={12} key={i}>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h3">
                {e.title}
              </Typography>
              <Typography component="p">{e.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <List>
        {contact.facebook.visible && (
          <ListItemIcon
            value={contact.facebook.url}
            text={contact.facebook.text}
            buttonStyled={{ background: "#3b5998", color: "white" }}
            icon={<Facebook className={classes.icon}></Facebook>}
            href={contact.facebook.url}
          />
        )}
        {contact.youtube.visible && (
          <ListItemIcon
            value={contact.youtube.url}
            text={contact.youtube.text}
            buttonStyled={{ background: "#282828" }}
            icon={<Youtube className={classes.icon} />}
            href={contact.youtube.url}
          />
        )}
        {contact.whatsapp.visible && (
          <ListItemIcon
            value={`+591 ${contact.whatsapp.value}`}
            text={`+591 ${contact.whatsapp.value}`}
            icon={<Whatsapp className={classes.icon}></Whatsapp>}
            buttonStyled={{ background: "#075e54", color: "white" }}
            href={`https://api.whatsapp.com/send?phone=591${
              contact.whatsapp.value
            }&text=${contact.whatsapp.text.replace(/ /gi, "%20")}`}
          />
        )}
        {contact.email.visible && (
          <ListItemIcon
            buttonStyled={{ textTransform: "none" }}
            value={contact.email.value}
            text={contact.email.value}
            icon={<EmailIcon className={classes.icon} />}
            href={`mailto:${contact.email.value}`}
          />
        )}
        {contact.address.visible && (
          <ListItemIcon
            buttonStyled={{ textTransform: "none", height: "75px" }}
            value={contact.address.text}
            text={contact.address.text}
            icon={<PinDropIcon className={classes.icon} />}
            href={contact.address.url}
          />
        )}
        {contact.tel.visible && (
          <ListItemIcon
            value={contact.tel.value}
            text={contact.tel.value}
            icon={<PhoneIcon className={classes.icon} />}
            href={`tel:${contact.tel.value}`}
          />
        )}
      </List>
    </Dialog>
  );
};
const ListItemIcon = ({ buttonStyled, icon, value, href, text }) => {
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
        <Typography>{text && text}</Typography>
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
