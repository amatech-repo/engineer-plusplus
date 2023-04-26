import PostForm from './PostForm';

export default {
  title: 'Components/Questions/PostForm',
  component: PostForm,
};

const Template = (args) => <PostForm {...args} />;
export const Default = Template.bind({});
Default.args = {
  onSubmit: (data) => console.log(data),
};
