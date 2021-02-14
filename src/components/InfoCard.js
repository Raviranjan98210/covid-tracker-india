import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const InfoCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography>Hellow</Typography>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles({
  card: {
    marginBottom: "10px",
    borderRadius: "20px",
  },
});

export default InfoCard;
