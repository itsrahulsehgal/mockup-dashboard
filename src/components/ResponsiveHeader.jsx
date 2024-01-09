import styled from "styled-components";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const SmallHeader = () => {
  return (
    <Container>
      <NotificationsOutlinedIcon
        style={{
          color: "#c3c3c3",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      />
    </Container>
  );
};

export default SmallHeader;

const Container = styled.div`
  width: 100%;
  position: fixed;
  display: none;
  justify-content: end;
  padding: 10px;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
