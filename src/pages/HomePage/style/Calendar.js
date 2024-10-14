import styled from 'styled-components';

// 전체 달력 컨테이너
export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// 날짜 이동 버튼이 들어갈 상단 영역 (추후 좌/우 이동 버튼 추가 가능)
export const DateMoveWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

// 주간 달력의 요일 버튼을 나열하는 컨테이너
export const WeekWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  margin: 10px 0;
`;

// 각 날짜별 개별 컨테이너
export const EachDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

// 요일 텍스트 (월, 화, 수 등)
export const EachDayofWeek = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #495057;
  margin-bottom: 5px;
`;

// 날짜 버튼 스타일
export const EachDayButton = styled.button`
  background-color: ${(props) => (props.isToday ? '#4caf50' : '#ffffff')};
  color: ${(props) => (props.isToday ? '#ffffff' : '#000000')};
  border: 2px solid #4caf50;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4caf50;
    color: #ffffff;
  }
`;

// 날짜 텍스트 (숫자 표시)
export const EachDayText = styled.div`
  font-weight: bold;
`;