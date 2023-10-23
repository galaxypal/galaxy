import React from "react";
import CardSwiper from "./CardSwiper";
import { Grid, Typography, Container } from "@mui/material";

const NftSection = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={5}>
            <Typography
              component={"h2"}
              sx={{
                textAlign: "center",
                color: "#fff",
                fontSize: "56px",
                mt: "40px",
              }}
            >
              Lorem Ipsum is simply dummy
            </Typography>
            <Typography
              component={"p"}
              sx={{ textAlign: "center", color: "white", fontSize: "21px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </Typography>
          </Grid>

          <Grid item xs={12} lg={7}>
            <CardSwiper />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NftSection;
