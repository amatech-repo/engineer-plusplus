import QuestionsList from "./QuestionsList"

export default {
  title: "Components/Questions/QuestionsList",
  component: QuestionsList,
  argTypes: {
    data: {
      control: {
        type: "object",
      },
    },
  },
}

const Template = args => <QuestionsList {...args} />
export const Default = Template.bind({});
Default.args = {
  data: [
    {
      id: "1",
      uId: "user123",
      mId: "member456",
      title: "Reactのコンポーネントのライフサイクルについて教えてください。",
      content: "Reactのコンポーネントのライフサイクルについて、詳しく教えてください。",
      createdAt: {
        seconds: 1651215355,
        nanoseconds: 123456789,
      },
    },
    {
      id: "2",
      uId: "user789",
      mId: "member012",
      title: "TypeScriptでのジェネリック型について教えてください。",
      content: "TypeScriptでのジェネリック型について、詳しく教えてください。",
      createdAt: {
        seconds: 1651215399,
        nanoseconds: 987654321,
      },
    },
    {
      id: "3",
      uId: "user234",
      mId: "member567",
      title: "JavaScriptのプロミスとは何ですか？",
      content: "JavaScriptのプロミスとはどのようなものなのでしょうか？",
      createdAt: {
        seconds: 1651215423,
        nanoseconds: 555555555,
      },
    },
  ],
};