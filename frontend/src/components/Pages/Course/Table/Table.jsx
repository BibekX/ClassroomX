import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableBody,
  Grid,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
  Button,
  InputBase,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import { useBorderedInputBaseStyles } from "@mui-treasury/styles/inputBase/bordered";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, status, schedule, select) {
  return { name, status, schedule, select };
}

const rows = [
  createData("Cohort 01", "Complete", "Mar 23 - Aug 04"),
  createData("Cohort 02", "Complete", "Aug 17 - Dec 10"),
  createData("Cohort 03", "Complete", "Jan 04 - May 01"),
  createData("Cohort 04", "Complete", "May 02 - Jul 29"),
  createData("Cohort 05", "Complete", "Aug 17 - Dec 10"),
  createData("Cohort 06", "Complete", "Mar 23 - Aug 04"),
  createData("Cohort 07", "Complete", "May 02 - Jul 29"),
  createData("Cohort 08", "Complete", "Jan 04 - May 01"),
  createData("Cohort 09", "Complete", "Aug 17 - Dec 10"),
  createData("Cohort 10", "Complete", "Jan 04 - May 01"),
  createData("Cohort 11", "Complete", "Mar 23 - Aug 04"),
  createData("Cohort 12", "Complete", "May 02 - Jul 29"),
  createData("Cohort 13", "Active", "Aug 17 - Dec 10"),
].reverse();
const useStyles2 = makeStyles((theme) => ({
  table: {
    minWidth: 100,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}))(TableCell);

export default function ClassroomTable() {
  const classes = useStyles2();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value.toLowerCase());
    setRowsPerPage(-1);
    e.target.value === "" && setRowsPerPage(5);
  };

  const styles = useBorderedInputBaseStyles();

  return (
    <div>
      <Grid container justify="center">
        <InputBase
          classes={styles}
          style={{ width: "45rem", margin: "2rem 0" }}
          placeholder={"Search Classroom"}
          startAdornment={<SearchIcon />}
          onChange={handleSearchChange}
        />
      </Grid>
      <Grid container justify="center">
        <Grid item md={1} sm={0}></Grid>
        <Grid item lg={8} md={10} sm={12}>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              aria-label="custom pagination table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                  <StyledTableCell align="right">Schedule</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map(
                  (row) =>
                    row.name.toLowerCase().includes(filter) && (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.status}</TableCell>
                        <TableCell align="right">{row.schedule}</TableCell>
                        <TableCell align="right">
                          <Button variant="contained" color="primary">
                            Select
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                )}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={12}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { "aria-label": "rows" },
                      native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={1} sm={0}></Grid>
      </Grid>
    </div>
  );
}
