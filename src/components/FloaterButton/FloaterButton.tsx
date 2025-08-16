import { createPortal } from 'react-dom';
import { Wrapper } from './FloaterButton.styles';

export const FloaterButton = ({ onClick }: { onClick: () => void }) => {
  const PortalChildren = <Wrapper onClick={onClick}>🍹</Wrapper>;

  return <>{createPortal(PortalChildren, document.body)}</>;
};
