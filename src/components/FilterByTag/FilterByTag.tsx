import type { FC } from 'react';
import { usePersistentLanguage } from '../../store/usePersistentLanguage';
import { filterByTagTitle, tags } from '../../util/constants';
import { Tag, Tags, Title } from './FilterByTag.styles';

interface Props {
  setFilter: (filter: string) => void;
  setIsFloaterModalOpen: (isModalOpen: boolean) => void;
}

export const FilterByTag: FC<Props> = ({ setFilter, setIsFloaterModalOpen }) => {
  const language = usePersistentLanguage((state) => state.language);
  const translatedTags = tags[language];

  const handleTagSelect = (tag: string) => {
    const isLastTag = tag === translatedTags[translatedTags.length - 1];

    setFilter(isLastTag ? '' : tag);
    setIsFloaterModalOpen(false);
  };

  return (
    <>
      <Title>{filterByTagTitle[language]}</Title>

      <Tags>
        {tags[language].map((tag, index) => (
          <Tag
            key={index}
            $index={index}
            onClick={() => handleTagSelect(tag)}
          >
            {tag}
          </Tag>
        ))}
      </Tags>
    </>
  );
};
