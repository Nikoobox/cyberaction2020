import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { XIcon } from "@heroicons/react/outline";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { COLORS } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {},
  wrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    outline: 0,
    backgroundColor: (props) =>
      props.fullScreen ? COLORS.BLACK_MAIN : "transparent",
    "& .MuiCardMedia-root": {
      height: "100%",
      width: "auto",
      marginLeft: "auto",
      marginRight: "auto",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "100%",

      height: (props) => (props.fullScreen ? "100%" : "auto"),
      "& .MuiCardMedia-root": {
        width: "100%",
        padding: 0,
      },
    },
    bgcolor: "background.paper",
    boxShadow: 24,
    padding: (props) => (props.fullScreen ? "24px 8px" : 24),
    "& .close-button": {
      position: "absolute",
      right: 12,
      top: 12,
      zIndex: 9,
      // "&:focus": {
      //   backgroundColor: "transparent",
      // },
    },
    "& .MuiButton-root": {
      width: 40,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "& .close-icon": {
      color: COLORS.WHITE_MAIN,
      height: 40,
      width: 40,
      transition: "0.2s all ease",
      "&:hover": {
        color: COLORS.GREEN_MAIN,
      },
    },
  },
  scrollable: {
    overflowY: "scroll",
    padding: "16px",
  },
}));

const MyModal = ({ open, onClose, content, fullScreen }) => {
  const classes = useStyles({ fullScreen });

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      disableAutoFocus
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.wrapper}>
          <Button onClick={onClose} className="close-button">
            <SvgIcon
              component={XIcon}
              viewBox="0 0 24 24"
              className="close-icon"
            />
          </Button>
          <div className={fullScreen ? classes.scrollable : ""}>
            {content && content}
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default MyModal;
