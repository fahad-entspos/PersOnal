import Style from "./Home.module.css";
import Fade from "react-reveal/Fade";

export default () => {
  return (
    <div className={Style.mainDiv}>
      <Fade top>
        {" "}
        <h1 className={Style.con}>  Providing The Best Service    </h1>{" "}
        <h1 className={Style.coq}> <span className={Style.span} > &  IT Solutions </span> </h1>
      </Fade>
      <Fade right>
      <h2 className={Style.secoundcon}>
      An Information Technology (IT) department is responsible for providing<br/> ways to implement
      and facilitate the flow of information  <br/> through your company. It achieves this goal through 
       <br/> three basic functions: infrastructure, <br/> functionality and
       <br/>governance 
      </h2>
      </Fade>
      <button className={Style.btn}>CLICK HERE</button>
    </div>
  );
};
 