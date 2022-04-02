import React, { useEffect, useState } from "react";
import {
  PhoneIcon,
  MailIcon,
  DotsVerticalIcon,
  XIcon,
  CalendarIcon,
} from "@heroicons/react/outline";

import useMediaQuery from "@mui/material/useMediaQuery";
import SvgIcon from "@mui/material/SvgIcon";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import { COLORS } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {},
  speedDialItem: {
    "& .item-icon": {
      color: COLORS.GREEN_MAIN,
      fill: "none",
    },
  },
}));

const actions = [
  {
    icon: (
      <SvgIcon
        component={CalendarIcon}
        viewBox="0 0 24 24"
        className="item-icon"
      />
    ),
    name: "Забронировать",
    operation: "booking",
    link: "//w327499.yclients.com/widgetJS",
    isBookingClass: "ms_booking",
  },
  {
    icon: (
      <SvgIcon
        component={PhoneIcon}
        viewBox="0 0 24 24"
        className="item-icon"
      />
    ),
    name: "Позвонить",
    operation: "call",
    link: "tel:+7927 898-9945",
  },
  {
    icon: (
      <SvgIcon component={MailIcon} viewBox="0 0 24 24" className="item-icon" />
    ),
    name: "Отправить имейл",
    operation: "email",
    link: "mailto:cyberaction_samara@mail.ru?subject=&body=Имя:%0D%0A%0D%0AНомер телефона:%0D%0A%0D%0AВаш вопрос:%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0AЛибо позвоните нам по номеру: +7 927 898-99-45",
  },
];

const Widget = () => {
  const classes = useStyles();
  const isXS = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (isOpen) {
        setIsOpen(false);
      }
    }, 10000);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: isXS ? 16 : 24,
        right: isXS ? 0 : 24,
        zIndex: 2,
      }}
    >
      <SpeedDial
        FabProps={{
          style: {
            backgroundColor: isOpen ? COLORS.GREY_CLASSIC : COLORS.GREEN_MAIN,
            border: isOpen
              ? `${COLORS.GREY_CLASSIC} solid 4px`
              : `${COLORS.GREEN_MAIN} solid 4px`,
            boxShadow: `0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%), 0px 0px 0px 2px ${
              isOpen ? COLORS.WHITE_MAIN : COLORS.WHITE_MAIN
            } inset`,
            borderRadius: "50%",
          },
        }}
        ariaLabel="SpeedDial Widget"
        sx={{ position: "absolute", bottom: 16, right: isXS ? 8 : 16 }}
        icon={
          <SpeedDialIcon
            icon={
              <SvgIcon
                component={DotsVerticalIcon}
                viewBox="0 0 24 24"
                color={COLORS.GREEN_MAIN}
              />
            }
            openIcon={
              <SvgIcon
                component={XIcon}
                viewBox="0 0 24 24"
                color={COLORS.WHITE_MAIN}
              />
            }
          />
        }
        onClick={() => setIsOpen(!isOpen)}
        open={isOpen}
      >
        {actions.map((action) => {
          return (
            <SpeedDialAction
              className={`${classes.speedDialItem} ${
                action.isBookingClass ? action.isBookingClass : ""
              }`}
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              // tooltipOpen
              FabProps={{
                style: {
                  padding: "12px",
                  width: "56px",
                  height: "56px",
                  backgroundColor: COLORS.GREY_MAIN,
                  color: COLORS.GREEN_MAIN,
                  borderRadius: "50%",
                  border: `${COLORS.GREY_MAIN} solid 4px`,
                  boxShadow: `0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%), 0px 0px 0px 2px ${COLORS.GREEN_MAIN} inset`,
                },
              }}
              href={action.link}
            />
          );
        })}
      </SpeedDial>
    </Box>
  );
};

export default Widget;
