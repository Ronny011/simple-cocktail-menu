import type { FC } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Card } from './LanguageModal.styles';
import { type Language, usePersistentLanguage } from '../../store/usePersistentLanguage';
import { Button } from '../../util/globals.styles';

interface Props {
  modalState: [boolean, (isModalOpen: boolean) => void];
}

export const LanguageModal: FC<Props> = ({ modalState }) => {
  const [isModalOpen, setIsModalOpen] = modalState;

  if (!isModalOpen) return null;

  const { setLanguage } = usePersistentLanguage();

  const handleLanguageSelect = (language: Language) => {
    setLanguage(language);
    setIsModalOpen(false);
  };

  const PortalChildren = (
    <>
      <Backdrop />
      <Card>
        <Button onClick={() => handleLanguageSelect('en')}>English</Button>
        <Button onClick={() => handleLanguageSelect('he')}>עברית</Button>
        <Button onClick={() => handleLanguageSelect('ru')}>Русский</Button>
      </Card>
    </>
  );

  return <>{createPortal(PortalChildren, document.body)}</>;
};
