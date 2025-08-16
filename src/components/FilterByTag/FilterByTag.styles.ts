import styled from 'styled-components';

const generateColor = (index: number) => {
  const hue = (index * 137.508) % 360; // Golden angle approximation for good distribution
  return `hsl(${hue}, 40%, 75%)`; // Pastel colors: lower saturation, higher lightness
};

export const Tag = styled.button<{ $index: number }>`
  color: var(--dark-text);
  background: ${({ $index }) => generateColor($index)};
  border: none;
  border-radius: 5px;
  padding: 5px 12px;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 15px;
`;
