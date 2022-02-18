import {
  Container,
  ActivContainer,
  Activity,
  ActivHeader,
  ActivTitle,
  ActivSelect,
  DataActivContainer,
  TargetContainer,
  TargetWrapper,
  TargetTitle,
  Target,
  ProgressContainer
} from "./statisticsStyles";
import UserChar from "../../../common/userChar/userChar";
import SquareIcon from "../../../common/squareIcon/squareIcon";
import RectangleBtn from "../../../common/rectangleBtn/rectangleBtn";
import ProgressBtn from "../../../common/progressBtn/progressBtn";

import imgLeg from "../../../common/images/icons/leg.svg";
import imgWater from "../../../common/images/icons/water.svg";
import imgCyclist from "../../../common/images/icons/cyclist.svg";
import imgRun from "../../../common/images/icons/running.svg";

const icoLeg = <SquareIcon color = {"rgba(255, 255, 255, 0.2)"} img = {imgLeg.src}/>;
const icoWater = <SquareIcon color = {"rgba(255, 140, 177, 1)"} img = {imgWater.src}/>;
const icoCyclist = <SquareIcon color = {"rgba(0, 0, 0, 0)"} img = {imgCyclist.src}/>;
const icoRun = <SquareIcon color = {"rgba(0, 0, 0, 0)"} img = {imgRun.src}/>;
const icoLeg2 = <SquareIcon color = {"rgba(0, 0, 0, 0)"} img = {imgLeg.src}/>;

const Frame1 = () => {

  return (
    <Container>
      <ActivContainer>
        <Activity>
          <ActivHeader>
            <ActivTitle>Активноcть</ActivTitle>
            <ActivSelect defaultValue="week">
              <option value="week">Неделя</option>
              <option value="Month">Месяц</option>
              <option value="Ear">Год</option>
            </ActivSelect>
          </ActivHeader>
          <UserChar/>
        </Activity>
        <DataActivContainer>
          <RectangleBtn
            text = {"Ежедневная ходьба"}
            bg = {"linear-gradient(180deg, #6D63FF 0%, #3B32C0 100%)"}
            ico = {icoLeg}/>
          <TargetContainer>
            <RectangleBtn
              text = {"Вода"}
              bg = {"rgba(255, 154, 186, 1)"} 
              ico = {icoWater}/>
            <TargetWrapper>
              <TargetTitle>Стаканов:</TargetTitle>
              <Target>4</Target>
            </TargetWrapper>
          </TargetContainer>
        </DataActivContainer>
      </ActivContainer>
      <ProgressContainer>
        <ProgressBtn 
          title = {"Велосипед"} 
          subtitle = {"10 км"} 
          target = {"50 км"} 
          ico = {icoCyclist}/>
        <ProgressBtn 
          title = {"Бег"} 
          subtitle = {"5 км"} 
          target = {"7 км/неделя"} 
          ico = {icoRun}/>
        <ProgressBtn 
          title = {"Ходьба"} 
          subtitle = {"10 000 шагов"} 
          target = {"12 000 шагов/неделя"} 
          ico = {icoLeg2}/>
      </ProgressContainer>
    </Container>
  );
};

export default Frame1;
