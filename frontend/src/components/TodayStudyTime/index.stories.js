import TodayStudyTime from './index';

export default {
  title: 'Components/TodayStudyTime',
  component: TodayStudyTime,
  argTypes: {
    studyTime: {type: 'number'}
  }
};

const Template = (args) => <TodayStudyTime {...args} />;
export const Default = Template.bind({});

Default.args = {
  studyTime: 12345
};