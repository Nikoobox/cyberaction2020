import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

import Section from "../Section/Section";
import { GAMES_DATA } from "../DataImports/index";
import Game from "./Game";
import MyModal from "../MyModal/MyModal";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Games = () => {
  const classes = useStyles();
  const [gameVideo, setGameVideo] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = (videoLink) => {
    setOpen(!open);
    setGameVideo(videoLink);
  };

  return (
    <>
      <Section title="Игры" anchor="games">
        <Grid container rowSpacing={12} columnSpacing={4}>
          {GAMES_DATA.map((gameData, idx) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={idx}>
                <Game {...gameData} handleClick={handleClick} />
              </Grid>
            );
          })}
        </Grid>
      </Section>
      <MyModal
        open={open}
        onClose={() => setOpen(false)}
        content={
          <CardMedia
            component="video"
            image={gameVideo}
            title="title"
            controls
            autoPlay
          />
        }
      />
    </>
  );
};

export default Games;
