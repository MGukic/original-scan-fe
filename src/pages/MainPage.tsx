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
      <ScanningBox>
        <Text type="Header H4 500" color="white">
          Scanning
        </Text>
      </ScanningBox>

      <PoweredByBox>
        <Text type="Body xsmall 600" color="white">
          powered by Bloxico
        </Text>
      </PoweredByBox>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  background: url(${backgroundImg}) center/cover no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const ScanningBox = styled.div`
  display: flex;
  padding: 24px 28px;
  border-radius: 12px;
  text-align: left;
  background: var(
    --Mobile-CTA,
    linear-gradient(147deg, #d4cfc1 -13.54%, #3e3526 60.29%)
  );
  box-shadow: 0px 2.333px 5.833px 0px rgba(0, 0, 0, 0.3);

  h4 {
    min-width: 110px;
  }
`;

const PoweredByBox = styled.div`
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 14px;
  margin-bottom: 65px;
  background: var(
    --Mobile-CTA,
    linear-gradient(147deg, #d4cfc1 -13.54%, #3e3526 60.29%)
  );
  box-shadow: 0px 0px 5px 0px #aaa496;
`;

export default MainPage;
