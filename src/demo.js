import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
}));

const sample = [
  { name: "apple", detail: ["a", "b", "c", "d"] },
  { name: "banana", detail: ["a", "b"] }
];

const sample2 = [
  {
    name: "Jun 23,2021",
    actionType: [
      {
        name: "Save",
        actionDate: "jun",
        actionUser: "Michit",
        reasonForChange: "any",
        pricingDetails: [
          {
            PricingType: "99 Years",
            Price: 0,
            productPricingStatus: "ACTIVE"
          }
        ]
      },
      {
        name: "Approve",
        actionDate: "May",
        actionUser: "michit",
        reasonForChange: "hello",
        pricingDetails: [
          {
            PricingType: "99 Years-M1",
            Price: 0,
            productPricingStatus: "ACTIVE"
          },
          {
            PricingType: "TBL",
            Price: 0,
            productPricingStatus: "ACTIVE"
          }
        ]
      }
    ]
  }
];

export default function SpanningTable() {
  const classes = useStyles();
  const [oneTable, setOneTable] = useState(false);
  if (!oneTable) {
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Fruit</TableCell>
              <TableCell align="right">Buyers</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sample.map((item) => (
              <Fragment>
                <TableRow>
                  <TableCell rowSpan={item.detail.length + 1}>
                    {item.name}
                  </TableCell>
                </TableRow>
                {item.detail.map((detail) => (
                  <TableRow>
                    <TableCell>{detail}</TableCell>
                  </TableRow>
                ))}
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  } else {
    return sample2?.map((parentItem) => {
      let rowSpan = 0;
      parentItem?.actionType?.map((innerChild) => {
        rowSpan = rowSpan + innerChild?.pricingDetails?.length;
        let child = innerChild?.map((childIteration) => {
          <TableRow rowSpan={innerChild?.pricingDetails?.length}></TableRow>;
        });
        return;
      });
    });
  }
}
