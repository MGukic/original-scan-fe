import styled from "styled-components";
import backgroundImg from "../assets/background.jpg";

import { Text } from "../Text";
import Icon from "../Icon";

const MainPage: React.FunctionComponent = () => {
  return (
    <MainPageWrapper>
      <MainPageHeadingWrapper>
        <Icon name="ring-parfume" size={43} />
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
  align-items: center;
  text-align: center;
  margin-top: 115px;
  margin-bottom: auto;
`;

const MainPageTitle = styled(Text)`
  margin: 16px 0 0 0;
`;

export default MainPage;
