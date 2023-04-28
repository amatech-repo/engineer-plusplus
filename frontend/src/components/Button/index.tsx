import * as React from "react";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

interface Props {
  label: string;
  onClick?: () => void;
}

const CustomButton = (props: Props) => {
  const { label, onClick } = props;

  return (
    onClick
    ? <Button variant="contained" color="inherit" onClick={() => onClick()}>{label}</Button>
    : <Button variant="contained" color="inherit">{label}</Button>

  );


};

export default CustomButton;
