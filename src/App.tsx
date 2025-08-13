import { useState } from 'react';
import { Wrapper } from './App.styles';
import { DrinkList } from './components/DrinkList';
import { LanguageModal } from './components/LanguageModal';
import { usePersistentLanguage } from './store/usePersistentLanguage';

export const App = () => {
  const language = usePersistentLanguage((state) => state.language);
  const languageModalState = useState<boolean>(!Boolean(language));

  return (
    <Wrapper>
      <LanguageModal modalState={languageModalState} />
      <DrinkList />
    </Wrapper>
  );
};
