import styled from "styled-components";
import {Textfit} from "react-textfit";
import {theme} from "../../styles/root/StyledRoot";
import {isMobile} from "react-device-detect";


export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 2dvh 2dvw;
  align-items: center;
  flex-direction: column;
  justify-content: space-between
`;

export const Title = styled(Textfit)<{
    content: string,
    selected?: boolean
    selectable?: boolean
}>`
  align-items: flex-start;
  white-space: nowrap;
  color: ${({selected}) => selected ? theme.black : theme.white};
  background-color: ${({selected}) => selected ? theme.white : theme.black};
  cursor: ${({selectable}) => selectable ? "pointer" : "default"};

  &::before {
    content: "${({content}) => content}";
    display: flex;
    justify-content: space-evenly;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: fit-content;
  white-space: nowrap;
  width: 95dvw;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5dvh;
`

export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 30dvh;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${() => isMobile ? '9dvh' : '25dvh'};
`;

export const Star = styled.img<{ scaled?: boolean }>`
  width: ${({scaled}) => scaled ? "60dvh" : "30dvh"};
  display: inline-block;
`;

export const Arrow = styled(Textfit)<{
    direction: string
}>`
  cursor: pointer;
  height: 25%;

  &::before {
    content: "${({direction}) => direction}";
    display: inline-block;
  }
`;

export const PopUp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopUpContent = styled.div`
  background-color: ${theme.black};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PopUpCloseButton = styled.button`
  font-family: inherit;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  transform: scale(5);
`;

