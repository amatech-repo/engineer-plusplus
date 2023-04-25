import Countup from './Countup';

export default {
  title: 'Components/Countup',
  component: Countup,
};

const Template = (args) => <Countup {...args} />;
export const Default = Template.bind({});