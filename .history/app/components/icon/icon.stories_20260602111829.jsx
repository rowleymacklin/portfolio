import { Icon } from '~/components/Icon';
import manifest from '~/components/Icon/manifest.json';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Icon',
};

export const Icons = () => {
  return (
    <StoryContainer>
      {Object.keys(manifest).map(key => (
        <Icon key={key} icon={key} />
      ))}
    </StoryContainer>
  );
};
