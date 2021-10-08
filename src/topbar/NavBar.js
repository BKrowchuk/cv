import { Link, useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { AddCircleOutline } from "@mui/icons-material";
// import HomeIcon from "@material-ui/icons/Home";
import { Home } from "@mui/icons-material";
import { blueGrey } from "@mui/material/colors";

const useStyles = makeStyles({
  button: {
    "&:hover": {
      background: blueGrey[500],
    },
  },
});

const Navbar = () => {
  const classes = useStyles();
  const cur_path = useLocation().pathname;
  var title = cur_path.substring(1);
  title = title.split("/").pop();

  if (title === "cv") {
    title = "Home";
  }

  var new_expense;
  if (title === "Expenses") {
    new_expense = (
      <Link to="/NewExpense">
        <IconButton className={classes.button} size="small">
          <AddCircleOutline />
        </IconButton>
      </Link>
    );
  }

  var home = (
    <Link to="/cv">
      <IconButton className={classes.button} disableRipple={true} size="small">
        <Home />
      </IconButton>
    </Link>
  );

  return (
    <nav className="navbar">
      <h1>{title}</h1>
      {/* <h1>Hi</h1> */}
      {new_expense}
      <div className="links">{home}</div>
    </nav>
  );
};

export default Navbar;
