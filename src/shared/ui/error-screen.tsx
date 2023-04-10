import { FC } from "react";
import { Paper, Typography } from "@mui/material";

type Props = Error;

const ErrorScreen: FC<Props> = ({ message }) => {
  return (
    <Paper>
      <Typography variant={"subtitle1"}>
        {message || "Something went wrong, try to come back later"}
      </Typography>
    </Paper>
  );
};

export default ErrorScreen;
