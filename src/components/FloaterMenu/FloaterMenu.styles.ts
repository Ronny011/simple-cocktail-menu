import styled, { css } from 'styled-components';

const cardCommonStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 15px;

  background-color: var(--light);
  color: var(--dark-text);
`;

export const FilterCard = styled.div`
  ${cardCommonStyle}
  width: 300px;
  padding: 15px;

  background-color: var(--light);
  color: var(--dark-text);
`;

export const LanguageCard = styled.div`
  ${cardCommonStyle}
  padding: 15px;
  width: fit-content;
`;

export const Wrapper = styled.div`
  z-index: 2;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 15px;
  top: 25%;
`;
