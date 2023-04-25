import * as React from "react";
import Button from "@mui/material/Button";

interface Props {
  label: string;
  start?: void;
  pause?: void;
  stop?: void;
}

const CustomButton = (props: Props) => {
  const { label } = props;

  return <Button variant="contained">{label}</Button>;
};

export default CustomButton;
