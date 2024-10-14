import styled from "styled-components";

export const Frame = styled.div`
    height: 100vh;
    display:flex;
    
`
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

`;
export const CalendarWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:pink;

`;
export const TodoListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: gray;

`;