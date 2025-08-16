import { useEffect, useState } from 'react';
import { Wrapper } from './App.styles';
import { DrinkList } from './components/DrinkList';
import { LanguageModal } from './components/LanguageModal';
import { usePersistentLanguage } from './store/usePersistentLanguage';
import { preload } from 'react-dom';
import { baseBadges, cocktailImages } from './util/consntants';
import { FloaterButton } from './components/FloaterButton';
import { FloaterMenu } from './components/FloaterMenu';

const preloading = () => {
  Object.values(cocktailImages).map((cocktailImage) => preload(cocktailImage, { as: 'image' }));
  Object.values(baseBadges).map((baseBadge) => preload(baseBadge, { as: 'image' }));
};

export const App = () => {
  const language = usePersistentLanguage((state) => state.language);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState<boolean>(!Boolean(language));
  const [isFloaterMenuOpen, setIsFloaterMenuOpen] = useState<boolean>(false);
  const [filterTag, setFilterTag] = useState('');

  useEffect(() => {
    preloading();
  }, []);

  return (
    <Wrapper>
      {!isLanguageModalOpen && !isFloaterMenuOpen && <FloaterButton onClick={() => setIsFloaterMenuOpen(true)} />}
      <FloaterMenu
        floaterModalState={[isFloaterMenuOpen, setIsFloaterMenuOpen]}
        languageModalState={[isLanguageModalOpen, setIsLanguageModalOpen]}
        setFilter={setFilterTag}
      />

      <LanguageModal modalState={[isLanguageModalOpen, setIsLanguageModalOpen]} />

      <DrinkList filter={filterTag} />
    </Wrapper>
  );
};
