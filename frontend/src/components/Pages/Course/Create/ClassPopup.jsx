import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { Button, Dialog, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useGraphicBtnStyles } from "@mui-treasury/styles/button/graphic";
import CloseIcon from "@material-ui/icons/Close";
import CreateClass from "./CreateClass";

const styles = (theme) => ({
  root: {
    margin: 0,
    // padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  createButton: {
    background: "linear-gradient(to top, #638ef0, #82e7fe)",
    "& > *": {
      textTransform: "none !important",
    },
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

// ------------------------------------------------------------------------------------------------------------------

export default function ClassPopup(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const btnStyles = useGraphicBtnStyles();
  return (
    <div>
      <Button
        className={classes.createButton}
        classes={btnStyles}
        variant={"contained"}
        color={"primary"}
        disableRipple
        onClick={handleClickOpen}
      >
        {props.buttonName}
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography
            variant="h4"
            align="center"
            style={{ fontWeight: 500, fontSize: "2.5em" }}
          >
            {props.title}
          </Typography>
        </DialogTitle>
        <form>
          <DialogContent dividers style={{ maxHeight: "65vh" }}>
            <CreateClass />
          </DialogContent>
          <DialogActions>
            <Button
              className={classes.createButton}
              classes={btnStyles}
              variant={"contained"}
              color={"primary"}
              disableRipple
              type="submit"
            >
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
