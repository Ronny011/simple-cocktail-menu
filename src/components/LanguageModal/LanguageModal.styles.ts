import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 35%;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 15px;
  padding: 15px 0 15px 0;

  @media (prefers-color-scheme: light) {
    background-color: var(--dark-text);
    color: var(--light);
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--light);
    color: var(--dark-text);
  }
`;

export const Button = styled.button`
  color: inherit;
  background: none;
  border: none;
  width: 150px;
  font-weight: bold;
  font-size: 15px;
  padding: 15px 0 15px 0;
  cursor: pointer;
`;

export const Backdrop = styled.div`
  background-color: rgba(36, 36, 36, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(10px);
  z-index: 1;
`;
