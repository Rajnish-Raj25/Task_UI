import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Header">
          <div className="leftHeader">
            {" "}
            <img src="/images/Horizontal Logo 1.png" />
          </div>
          <div className="rightHeader">
            <div>About </div>
            <div>Hire from us</div>
            <div>Apply to Upskill</div>
            <div>FuturenseUni</div>
          </div>
        </div>
        <div className="title">
          Title Line <br /> Comes Here
        </div>
        <div className="subtitle">Subtitle if there is any</div>
        <div className="subTobe">
          <div>Subtitle To Be Here</div>
        </div>
        <div className="subTobe1">
          {" "}
          Futurense, as the Godfather of Talent, is the first and only Indian
          company which provides an ideal platform for the talent to unlock its
          true potential by helping them upskill while paying them full
          salaries. Our career-accelerating ecosystem of finding, supporting,
          and inspiring potential Talent enables Businesses to connect with an
          untapped talent pool from tier 2 and tier 3 cities of the country
        </div>
        <div className="bottom">
          <div>SUCCESS COUNTER</div>
          <div>
            16<span className="pluseIcon">+</span> Cohorts
          </div>
          <div>
            360<span className="pluseIcon">+</span> Deployed Candidates
          </div>
          <div>
            40<span className="pluseIcon">+</span> Clients
          </div>
        </div>

        <div className="hand">
          <img src="/images/Hand.png" className="hand1" />
        </div>
        <div className="HandCrown">
          <img src="/images/HandCrown.png" className="HandCrown1" />
        </div>

        <div className="s">
          <img src="/images/s.png" className="s1" />
        </div>

        <div className="sr">
          <img src="/images/RightS.png" className="sr1" />
        </div>
      </div>
    </div>
  );
}

export default App;
