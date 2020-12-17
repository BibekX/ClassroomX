import React from "react";
import { Typography, Link } from "@material-ui/core";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      style={{ color: "#fff", padding: "1em 0" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        ClassroomX
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
