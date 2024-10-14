import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaBrain, FaInstagram, FaUser } from 'react-icons/fa';

const activeColor = '#7DB1FF';
const inactiveColor = '#9e9e9e'

// TabBar 컨테이너 스타일
const TabBarContainer = styled.div`
  width: 100%;
  height: 9vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.tabBackground};
  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
  left: 0;
    border-radius: 20px 20px 0 0;
`;

// 버튼 스타일 (활성화/비활성화 색상 및 크기 설정)
const TabButton = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 15px;
  color: ${(props) => (props.$isActive ? activeColor : inactiveColor)}; /* 비활성화 색상 */

  &.active {
    color: ${(props) => props.theme.colors.tabIconActive}; /* 활성화 색상 */
  }

  svg {
    font-size: ${(props) => (props.$isActive ? '28px' : '25px')}; /* 아이콘 크기 조정 */
    margin-bottom: 5px;
    transition: all 0.3s ease; /* 부드러운 애니메이션 */
  }
`;

const TabBar = () => {
    const location = useLocation(); // 현재 경로 확인

    return (
        <TabBarContainer>
            <TabButton to="/" end $isActive={location.pathname === '/'}>
                <FaHome />
                home
            </TabButton>
            <TabButton to="/aimission" $isActive={location.pathname === '/aimission'}>
                <FaBrain />
                AImission
            </TabButton>
            <TabButton to="/sns" $isActive={location.pathname === '/sns'}>
                <FaInstagram />
                sns
            </TabButton>
            <TabButton to="/mypage" $isActive={location.pathname === '/mypage'}>
                <FaUser />
                my
            </TabButton>
        </TabBarContainer>
    );
};

export default TabBar;