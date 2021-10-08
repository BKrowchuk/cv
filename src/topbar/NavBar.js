import { Link, useLocation } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Home } from "@mui/icons-material";

const useStyles = makeStyles({
  button: {
    "&:hover": {
      backgroundColor: "blue",
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

  var home = (
    <Link to="/cv">
      <IconButton size="small">
        <Home />
      </IconButton>
    </Link>
  );

  var resume = (
    <Link to="/cv/Resume">
      <Typography>Resume</Typography>
    </Link>
  );

  var contact = (
    <Link to="/cv">
      <Typography>Contact</Typography>
    </Link>
  );

  var portfolio = (
    <Link to="/cv">
      <Typography>Portfolio</Typography>
    </Link>
  );

  return (
    <nav className="navbar">
      {/* <h1>{title}</h1> */}
      {/* <h1>Hi</h1> */}
      {/* {new_expense} */}
      <div className="middle">
        {resume}
        {portfolio}
        {contact}
      </div>
      <div className="links">{home}</div>
    </nav>
  );
};

export default Navbar;
