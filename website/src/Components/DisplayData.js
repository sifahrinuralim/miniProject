import React, { useContext } from "react";
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@material-ui/core";
import { multiStepContext } from "../StepContext";

export default function DisplayData() {
  const { finalData } = useContext(multiStepContext);
  return (
    <div>
      <TableContainer style={{ display: "flex", justifyContext: "center" }} />
    </div>
  );
}
