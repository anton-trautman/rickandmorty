import { Box, Card, styled } from "@mui/material";

export const StyledGridAutoFill = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplate: "auto / repeat(auto-fill, minmax(250px, 1fr));",
  gridGap: "10px",
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 250,
  width: "100%",
  height: "100%",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
}));
