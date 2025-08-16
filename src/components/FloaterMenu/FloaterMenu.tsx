import { type FC } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { Backdrop } from '../LanguageModal/LanguageModal.styles';
import { createPortal } from 'react-dom';
import { FilterCard, LanguageCard, Wrapper } from './FloaterMenu.styles';
import { FilterByTag } from '../FilterByTag';
import { LanguageIcon } from '../../assets/LanguageIcon';

interface Props {
  floaterModalState: [boolean, (isModalOpen: boolean) => void];
  languageModalState: [boolean, (isModalOpen: boolean) => void];
  setFilter: (filter: string) => void;
}

export const FloaterMenu: FC<Props> = ({ floaterModalState, languageModalState, setFilter }) => {
  const [isFloaterModalOpen, setIsFloaterModalOpen] = floaterModalState;
  const [_, setIsLanguageModalOpen] = languageModalState;

  const ref = useClickOutside(() => {
    setIsFloaterModalOpen(false);
  });

  if (!isFloaterModalOpen) return null;

  const handleLanguageClick = () => {
    setIsLanguageModalOpen(true);
    setIsFloaterModalOpen(false);
  };

  const PortalChildren = (
    <>
      <Backdrop />

      <Wrapper ref={ref}>
        <LanguageCard onClick={handleLanguageClick}>
          <LanguageIcon />
        </LanguageCard>
        <FilterCard>
          <FilterByTag
            setFilter={setFilter}
            setIsFloaterModalOpen={setIsFloaterModalOpen}
          />
        </FilterCard>
      </Wrapper>
    </>
  );

  return <>{createPortal(PortalChildren, document.body)}</>;
};
