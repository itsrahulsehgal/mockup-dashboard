import styled from "styled-components";
import Hero from "./sections/Hero";
import LeftSection from "./sections/LeftSection";
import RightSection from "./sections/RightSection";
function App() {
  return (
    <MainWrapper>
      <LeftSection />
      <Hero />
      <RightSection/>
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background-color: white;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
  }
`;
