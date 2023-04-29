import MaterialList from './index';

export default {
  title: 'MaterialList',
  component: MaterialList,
  argTypes: {
    listTitle: {type: 'string'},
  },
};

const Template = (args) => <MaterialList {...args} />;
export const Default = Template.bind({});
Default.args = {
  listTitle: '教材一覧',
}

export const Udemy = Template.bind({});
Udemy.args = {
  listTitle: 'Udemy',
}

export const Youtube = Template.bind({});
Youtube.args = {
  listTitle: 'Youtube',
}
