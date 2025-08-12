import styled from 'styled-components';

export const Wrapper = styled.div<{ $alignToRight?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  align-items: ${({ $alignToRight }) => ($alignToRight ? 'start' : 'end')};
`;

export const DrinkPhoto = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const Title = styled.h3`
  margin: 0;
`;
