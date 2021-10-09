const Yamly = () => {
  return (
    <div className="row">
      <div className="column date">
        <p>06/2021- Present</p>
      </div>
      <div className="column content">
        <div className="title">
          <h3>Yamly</h3>
          <h4>| Expense Tracker</h4>
        </div>
        <ul>
          <li>
            Using <strong>Electron, React, Material UI, Chartjs</strong> and
            several other packages to create a desktop application for tracking
            and charting expenses and income over time
          </li>
          <li>
            <strong>Python</strong> backend utilizing a{" "}
            <strong>PostgreSQL</strong> database
          </li>
          <li>
            <strong>Docker</strong> is used to contain the application as
            multiple OS are being used in development
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Yamly;
