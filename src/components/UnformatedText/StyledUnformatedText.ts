import styled from "styled-components";

export const TextWrapper = styled.div`
  display: inline-block;
  align-items: center;
  width: 50dvw;
  font-size: calc(8px + 13 * (100vw / 1680));

  @media (max-width: 767px) {
    font-size: calc(8px + (13 + 13 * 0.7) * ((100vw - 320px) / 1680));
  }
`;