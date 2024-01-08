import styled from "styled-components";
import Barchart from "../components/Barchart";
import Progressbar from "../components/Progressbar";
const Hero = () => {
  return (
    <MainWrapper>
      <Container>
        <div>
          <p>Retirement Income</p>
          <h3>Starting Year 2056</h3>
        </div>

        <GoalWrapper>
          <div>
            <h2>$300,000</h2>
            <small>My Goal</small>
          </div>
          <div>
            <h2>59%</h2>
            <small>Goal Achieved</small>
          </div>
          <div>
            <h2>$300 </h2>
            <small>Est. Monthly income</small>
          </div>
        </GoalWrapper>

        <ContributionWrapper>
          <h4>Contribution Overtime</h4>
          <Barchart />
        </ContributionWrapper>

        <PeersWrapper>
          <h4>How do I compare my peers?</h4>
          <small>These numbers represent current goal achievement</small>
          <div>
            <DropdownWrapper>
              <div>
                <p> Age :</p>
                <select name="Age" id="ageId">
                  <option value="under 30">under 30</option>
                  <option value="under 60">under 60</option>
                </select>
              </div>
              <div>
                <p>Salary :</p>
                <select name="Salary" id="SalaryId">
                  <option value="20K-30K">20K-30K</option>
                  <option value="30K-60K">30K-60K</option>
                </select>
              </div>
              <div>
                <p>Gender :</p>
                <select name="Gender" id="GenderId">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="other">other</option>
                </select>
              </div>
            </DropdownWrapper>
            <ProgressWrapper>
              <div>
                <Progressbar value={78} />
                <p>Average</p>
              </div>
              <div>
                <Progressbar value={95} />
                <p>Top</p>
              </div>
              <div>
                <Progressbar value={59} />
                <p>Me</p>
              </div>
            </ProgressWrapper>
          </div>
        </PeersWrapper>
      </Container>
    </MainWrapper>
  );
};

export default Hero;

const MainWrapper = styled.div`
  flex: 2;
  background-color: white !important;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  margin: 20px;
  padding: 10px;

  & > div {
    & > p {
      color: #7e70fd;
      margin-bottom: 3px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 5px;
    margin: 0;
    margin-top: 20px;
  }
`;

const GoalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 30px;

  & > div {
    flex: 1;
    border-bottom: 2px solid #7e70fd;
    padding: 10px;
    color: #363636;

    & > small {
      color: #c3c3c3;
    }
    @media screen and (max-width: 768px) {
      flex: none;
    }
  }
  & > div:nth-of-type(1) {
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

const ContributionWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: #363636;
  & > h4 {
    margin-bottom: 10px;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }
`;

const PeersWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  color: #363636;

  & > small {
    color: #c3c3c3;
  }
  & > div {
    margin-top: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }
`;
const DropdownWrapper = styled.div`
  padding: 10px;

  & > div {
    display: flex;
    flex: 1;
    gap: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgrey;
    & > select {
      outline: none;
      border: none;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`;

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > div {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 20px;
    margin-top: 40px;
  }
`;
