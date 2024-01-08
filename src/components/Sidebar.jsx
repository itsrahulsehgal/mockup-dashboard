import styled from "styled-components";
import butterfly from "../assets/butterfly.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import FenceOutlinedIcon from "@mui/icons-material/FenceOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Sidebar = () => {
  return (
    <div>
      <SidebarWrapper>
        <LogoSection>
          <img src={butterfly} alt="logo" />

          <SearchOutlinedIcon
            style={{
              color: "#c3c3c3",
              fontSize: "25px",
              fontWeight: "bolder",
              cursor: "pointer",
            }}
          />
        </LogoSection>
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
          </ul>
        </NavigationSection>

        <SettingsSection>
          <NotificationsOutlinedIcon
            style={{
              color: "#c3c3c3",
              fontSize: "25px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          />
          <LogoutOutlinedIcon
            style={{
              color: "#c3c3c3",
              fontSize: "25px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          />
        </SettingsSection>
      </SidebarWrapper>
    </div>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  padding: 4px;
  background-color: #fff;
  max-width: 150px;
  height: 100vh;
  position: fixed;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  gap: 30px;

  & > img {
    width: 35px;
  }
`;

const NavigationSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;

  & > ul {
    text-decoration: none;
    list-style-type: none;
    display: flex;
    flex-direction: column;
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

const SettingsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  gap: 25px;
  position: absolute;
  bottom: 30px;
  left: 8px;
`;
