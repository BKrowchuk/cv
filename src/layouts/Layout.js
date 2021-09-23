import { makeStyles } from "@material-ui/core";
// import Navbar from "./Navbar";

const useStyles = makeStyles({
  page: {
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    // padding: "5px 20px 20px",
  },
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolores
          nulla autem nisi iure animi laudantium quibusdam, at voluptas,
          voluptatem perspiciatis error! Rem eos molestias deleniti atque
          quisquam quia nihil.
        </p>
      </div>
      <div className={classes.page}>{children}</div>
    </div>
  );
}
