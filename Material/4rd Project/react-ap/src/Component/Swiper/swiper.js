import "./swiper.css"

export default () => {

  return (
    <>
    <h1 className="btn"> Meet our Leadership</h1>
      <div className="mainDivteam">
        <div className="singl">
          <img className="teamimg" src={"/image/hack (1).jpg"} />
          <h2  className="fahad">MiRzA FaHaD</h2>
          <p>Front-end Developer</p>
        </div>
        <div className="singl">
          {" "}
          <img className="teamimg" src={"/image/hack (2).jpg"} />
          <h2  className="fahad"> Mian Haseeb</h2>
          <p>Back-end Developer</p>{" "}
        </div>
        <div className="singl">
          {" "}
          <img className="teamimg" src={"/image/hack (3).jpg"} />
          <h2  className="fahad">Mian Farzeel</h2>
          <p>Senior Developer</p>{" "}
        </div>
      </div>
    </>
  );
};
