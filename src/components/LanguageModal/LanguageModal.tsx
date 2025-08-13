import type { Dispatch, FC, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Button, Card } from './LanguageModal.styles';
import { type Language, usePersistentLanguage } from '../../store/usePersistentLanguage';

interface Props {
  modalState: [boolean, Dispatch<SetStateAction<boolean>>];
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
