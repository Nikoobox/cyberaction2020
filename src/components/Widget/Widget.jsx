import React, { useEffect, useState } from "react";
import {
  PhoneIcon,
  MailIcon,
  DotsVerticalIcon,
  XIcon,
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
}));

const actions = [
  {
    icon: <PhoneIcon />,
    name: "Позвонить",
    operation: "call",
    link: "tel:+7927 898-9945",
  },
  {
    icon: <MailIcon />,
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
            backgroundColor: isOpen ? COLORS.GREY_CLASSIC : COLORS.RED_MAIN,
            outline: `1px solid ${COLORS.WHITE_MAIN}`,
            outlineOffset: "-5px",
            borderRadius: "50%",
          },
        }}
        ariaLabel="SpeedDial Widget"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={
          <SpeedDialIcon
            icon={<SvgIcon component={DotsVerticalIcon} viewBox="0 0 24 24" />}
            openIcon={<SvgIcon component={XIcon} viewBox="0 0 24 24" />}
          />
        }
        onClick={() => setIsOpen(!isOpen)}
        open={isOpen}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            // tooltipOpen
            FabProps={{
              style: {
                padding: "10px",
                width: "56px",
                height: "56px",
                backgroundColor: COLORS.GREY_MAIN,
                color: COLORS.GREEN_MAIN,
                outline: `1px solid ${COLORS.GREEN_MAIN}`,
                outlineOffset: "-4px",
                borderRadius: "50%",
              },
            }}
            href={action.link}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default Widget;
