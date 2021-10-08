import { Link } from "react-router-dom";
import { Card, CardHeader, CardContent } from "@mui/material";

const ResumeCard = (props) => {
  const style = {
    ml: 0,
    paddingBottom: 0,
    // width: { sm: 200, md: 300 },
    // backgroundColor: { xs: "secondary.light", sm: "#0000ff" },
    // boxShadow: 6,
  };

  return (
    <div>
      <Card sx={{ ...style }}>
        <CardHeader title="Resume" />
        <CardContent>
          <Link to="/cv/Resume/" className="link">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              unde nihil sed maiores ipsam esse aliquam nemo fugit perferendis
              sunt. Fugit tenetur ex sint numquam sequi nostrum sunt quod minus.
            </p>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeCard;
