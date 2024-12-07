import { useEffect, useState } from "react";
import { StaggerTextChange } from "../../../common/StaggerText/index";
import "./globals.css";

const Index = () => {
  const [load, setload] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setload(true);
    }, 0);
  });

  return (
    <div className="demo-main pb-36 md:pb-0 font-giorgia">
      <div>
        <div className="stroke m-6 transform -translate-x-1/4">
          <StaggerTextChange
            text={"TURNING VISION"}
            fontWeight={"lighter"}
            fontSize={6.3}
            duration={0.9}
            unit={"vw"}
            changeTo={"CREATING ELEGANT  "}
            triggerAfter={500}
          />
        </div>
        <div className=" m-6 transform -translate-x-24">
          <StaggerTextChange
            text={" INTO REALITY "}
            fontWeight={"lighter"}
            fontSize={6.5}
            duration={0.9}
            unit={"vw"}
            changeTo={"WEB SOLUTIONS  "}
            triggerAfter={700}
          />
        </div>
        <div className="stroke m-6 transform translate-x-12">
          <StaggerTextChange
            text={"WITH  FLAWLESS  "}
            fontWeight={"lighter"}
            fontSize={6.5}
            duration={0.9}
            unit={"vw"}
            changeTo={"THAT ACCELERATE  "}
          />
        </div>

        <div className=" m-6 transform translate-x-1/3">
          <StaggerTextChange
            text={"WEB SOLUTIONS"}
            fontWeight={"lighter"}
            fontSize={6.5}
            duration={0.9}
            unit={"vw"}
            changeTo={"YOUR SUCCESS"}
          />
        </div>
      </div>
    </div>
  );
};
export default Index;
