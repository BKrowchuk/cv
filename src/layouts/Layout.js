import { makeStyles } from "@mui/styles";
import Navbar from "../topbar/NavBar";

const useStyles = makeStyles({
  page: {
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    background: "#333333",
    // padding: "5px 20px 20px",
  },
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.page}>{children}</div>
    </div>
  );
}
