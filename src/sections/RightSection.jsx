import styled from "styled-components";
import Slider from "@mui/material/Slider";

const RightSection = () => {
  return (
    <RightWrapper>
      <Container>
        <div>
          <h3>Retirement Strategy</h3>
          <SliderWrapper>
            <div>
              <p>Employee Contribution</p>
              <div>
                <Slider
                  defaultValue={12}
                  valueLabelDisplay="auto"
                  style={{ color: "#8cb3ff" }}
                />
                <p>12%</p>
              </div>
            </div>
            <div>
              <p>Retirement Age</p>
              <div>
                <Slider
                  defaultValue={65}
                  valueLabelDisplay="auto"
                  style={{ color: "#8cb3ff" }}
                />
                <p>65</p>
              </div>
            </div>
          </SliderWrapper>

          <InfoWrapper>
            <div>
              <p>Employee Contribution</p>
              <p>8.5%</p>
            </div>
            <div>
              <p>Interest Rate</p>
              <p>5%</p>
            </div>
          </InfoWrapper>

          <ButtonWrapper>
            <button>Update</button>
            <a href="#">View Help Docs &gt; </a>
          </ButtonWrapper>
        </div>

        <LearnMoreWrapper>
          <p>
            Are you considering a <br /> <span>Housing Advance ?</span>
          </p>
          <small>Limited time reduced interest.</small>
        </LearnMoreWrapper>
      </Container>
    </RightWrapper>
  );
};

export default RightSection;

const RightWrapper = styled.div`
  flex: 1;
  background-color: white !important;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  margin: 20px;

  & > div {
    width: 100%;
    border-radius: 8px;
    background-color: #fafafa;
    padding: 20px;
    color: #363636;
  }
  @media screen and (max-width: 768px) {
    padding: 0px;
    margin: 0px;
  }
`;

const SliderWrapper = styled.div`
  margin-top: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;

  width: 100%;
  color: #363636;
  font-weight: bold;

  & > div {
    width: 100%;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin: 10px 0;
    }
  }
`;

const InfoWrapper = styled.div`
  margin-top: 20px;
  color: #363636;
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 8px;

  & > button {
    width: 100%;
    padding: 10px;
    background-color: #4935ff;
    border-radius: 8px;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }

  & > a {
    text-decoration: none;
    color: #7e70fd;
    font-size: 14px;
    font-weight: bold;
  }
`;

const LearnMoreWrapper = styled.div`
  margin-top: 30px;
  padding: 10px;
  border-left: 2px solid #7e70fd;
  width: 100%;
  border-radius: 0px !important;
  background-color: #fff !important;

  color: #363636;

  & > p {
    & > span {
      font-weight: bold;
    }
  }

  & > small {
    color: #c3c3c3;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
