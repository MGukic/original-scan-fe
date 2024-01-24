import styled from "styled-components";
import backgroundImg from "../assets/background.jpg";

import { Text } from "../Text";

const MainPage: React.FunctionComponent = () => {
  return (
    <MainPageWrapper>
      <MainPageHeadingWrapper>
        {/* <img src="../assets/ring.png" /> */}
        <MainPageTitle type="Header H1 800" color="black">
          IMMUTED
        </MainPageTitle>
        <Text type="Body small 600">Your perfume authenticity partner</Text>
      </MainPageHeadingWrapper>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  background: url(${backgroundImg}) center/cover no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainPageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 174px;
  margin-bottom: auto; /* Center vertically within MainPageWrapper */
`;

const MainPageTitle = styled(Text)`
  margin: 0px;
`;

export default MainPage;
