import { Container } from "@mui/material";
import Masonry from "react-masonry-css";
import ResumeCard from "./cards/ResumeCard";

const Homepage = () => {
  const breakpoints = {
    default: 3,
    1200: 2,
    700: 1,
  };

  return (
    <Container maxWidth={false}>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div key={1}>
          <ResumeCard />
        </div>
        <div key={2}>
          <ResumeCard />
        </div>
        <div key={3}>
          <ResumeCard />
        </div>
      </Masonry>
    </Container>
  );
};

export default Homepage;
