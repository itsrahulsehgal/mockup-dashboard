import styled from "styled-components";
import profile from "../assets/profile.png";

const Profile = () => {
  return (
    <ProfileWrapper>
      <Container>
        <UserInformation>
          <img src={profile} alt="ProfileImg" />
          <div>
            <h2>Hi Mike,</h2>
            <p>welcome back.</p>
          </div>
        </UserInformation>

        <AccountSection>
          <h3>Today</h3>
          <div>
            <MainBalance>
              <h1>$ 19,892</h1>
              <small>Account Balance</small>
            </MainBalance>
            <Contributions>
              <h2>$ 4,000</h2>
              <small>Year-to-date Contributions</small>
            </Contributions>

            <Interest>
              <h2>$ 1,892</h2>
              <small>Total Interest</small>
            </Interest>
            <button>
              <select name="dd">
                <option value="some text">I want to</option>
                <option value="some text">Withdraw</option>
                <option value="some text">Invest</option>
              </select>
            </button>
          </div>
        </AccountSection>

        <RecentTransaction>
          <h4>Recent Transactions</h4>
          <div>
            <small>2020-8-7</small>
            <p>Withdrawal Transfer to Bank-XXX12</p>
          </div>
          <div>
            <small>2020-8-5</small>
            <p>Withdrawal Transfer to Bank-XXX11</p>
          </div>
          <div>
            <small>2020-8-1</small>
            <p>Withdrawal Transfer to Bank-XXX13</p>
          </div>
        </RecentTransaction>
      </Container>
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  flex: 1;
  background-color: #fafafa;
  padding: 10px;
  margin-left: 60px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 0;
    background-color: white;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  margin-left: 30px;
  color: #363636;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
    padding: 10px;
  }
`;

const UserInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-warp: warp;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  color: #363636;

  & > img {
    width: 70px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 40px;
    padding: 10px;
  }
`;

const AccountSection = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  flex-wrap: wrap;

  color: #363636;

  & > h3 {
    margin-bottom: 10px;
  }

  & > div {
    button {
      margin-top: 15px;
      padding: 10px 15px 10px 15px;
      border: none;
      outline: none;
      background-color: #4935ff;
      border-radius: 8px;
      color: #fff;

      & > select {
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
      }
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    background-color: #fafafa;
    border-radius: 8px;
  }
`;

const MainBalance = styled.div`
  padding: 5px 0;
  font-size: 14px;

  & > small {
    color: #c3c3c3;
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;

const Contributions = styled.div`
  margin-top: 10px;
  & > small {
    color: #c3c3c3;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

const Interest = styled.div`
  margin-top: 20px;
  color: #363636;
  & > small {
    color: #c3c3c3;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

const RecentTransaction = styled.div`
  margin-top: 40px;
  color: #363636;
  padding: 10px;
  & > h4 {
    margin-bottom: 10px;
  }

  & > div {
    margin-bottom: 10px;
    border-bottom: 1px solid lightgrey;

    & > small {
      color: #c3c3c3;
      font-weight: bold;
    }

    & > p {
      font-size: 12px;
      margin-bottom: 10px;
      font-weight: bold;
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 15px;
    background-color: #fafafa;
    border-radius: 8px;
  }
`;
