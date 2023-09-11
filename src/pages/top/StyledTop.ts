import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5%;
  justify-items: end;
  justify-content: space-evenly;

  @media (max-width: 767px) {
    display: flex;
  }
`;

export const TopStar = styled.img`
  width: 25dvw;
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: fit-content;
  overflow-x: hidden;
  white-space: nowrap;
  justify-content: center
`;


export const Star = styled.img`
  width: calc(100dvw / 20.5);
`;

