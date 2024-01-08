import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import ResponsiveHeader from "../components/ResponsiveHeader";
import ResponsiveNav from "../components/ResponsiveNav";
const LeftSection = () => {
  return (
    <LeftWrapper>
      <Sidebar />
      <ResponsiveHeader />
      <ResponsiveNav />
      <Profile />
    </LeftWrapper>
  );
};

export default LeftSection;

const LeftWrapper = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;
