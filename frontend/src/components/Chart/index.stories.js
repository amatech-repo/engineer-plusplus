import StudyChart from './index'

export default {
  title: 'StudyChart',
  component: StudyChart,
}

const Template = (args) => <StudyChart {...args} />
export const Default = Template.bind({});
Default.args = {}