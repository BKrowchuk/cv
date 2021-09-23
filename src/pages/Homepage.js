import { Container } from "@material-ui/core";
import Masonry from "react-masonry-css";

const Homepage = () => {
  const breakpoints = {
    default: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div key={1}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            amet qui, temporibus porro quae est quod optio dolorem beatae
            dolores laboriosam adipisci? Excepturi recusandae sunt dignissimos,
            quo natus aspernatur odio.
          </p>
        </div>
        <div key={2}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            amet qui, temporibus porro quae est quod optio dolorem beatae
            dolores laboriosam adipisci? Excepturi recusandae sunt dignissimos,
            quo natus aspernatur odio.
          </p>
        </div>
        <div key={3}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            amet qui, temporibus porro quae est quod optio dolorem beatae
            dolores laboriosam adipisci? Excepturi recusandae sunt dignissimos,
            quo natus aspernatur odio.
          </p>
        </div>
      </Masonry>
    </Container>
  );
};

export default Homepage;
