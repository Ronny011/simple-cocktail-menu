import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  gap: 25px;

  @media (min-width: 1000px) {
    width: 50vw;
  }
`;

export const Separator = styled.hr`
  border: none;
  height: 1px;
  width: 100%;
  @media (prefers-color-scheme: light) {
    background: linear-gradient(to right, var(--light), var(--dark), var(--light));
  }
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to right, var(--dark), var(--light), var(--dark));
  }
`;
