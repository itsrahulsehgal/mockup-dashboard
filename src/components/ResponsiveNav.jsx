import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import FenceOutlinedIcon from "@mui/icons-material/FenceOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const SmallNav = () => {
  return (
    <Container>
      <NavigationSection>
        <ul>
          <li>
            <HomeOutlinedIcon
              style={{
                fontSize: "25px",
                fontWeight: "bold",
              }}
            />
          </li>
          <li>
            <FenceOutlinedIcon
              style={{
                color: "#c3c3c3",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            />
          </li>
          <li>
            <ListAltOutlinedIcon
              style={{
                color: "#c3c3c3",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            />
          </li>
          <li>
            <PersonOutlinedIcon
              style={{
                color: "#c3c3c3",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            />
          </li>
          <li>
            <SearchOutlinedIcon
              style={{
                color: "#c3c3c3",
                fontSize: "25px",
                fontWeight: "bolder",
                cursor: "pointer",
              }}
            />
          </li>
        </ul>
      </NavigationSection>
    </Container>
  );
};

export default SmallNav;

const Container = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const NavigationSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  & > ul {
    text-decoration: none;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      padding: 5px;
      cursor: pointer;
      transition: all 0.2s;
    }
    & > li:nth-child(1) {
      background-color: #4935ff;
      color: #fff !important;
      box-shadow: 10px 10px 20px #c3c3c3;
    }
    & > li:hover {
      background-color: #4935ff;
      color: #fff !important;
      box-shadow: 10px 10px 20px #c3c3c3;
    }
  }
`;
