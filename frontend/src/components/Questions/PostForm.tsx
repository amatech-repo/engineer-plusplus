import { useState } from "react";
import PostPreview from "./PostPreview";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { addQuestion } from "./add_question";

interface Question {
  title: string;
  content: string;
  createdAt: any;
}

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();

  const setContentData = (e: any) => {
    e.preventDefault();

    setContent(e.target.value);
  };

  const setTitleData = (e: any) => {
    e.preventDefault();

    setTitle(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const createdAt = new Date();
    const question: Question = await addQuestion(title, content, createdAt);
    console.log("Added question:", question);
    setTitle("");
    setContent("");
  };

  return (
    <div className="post-form min-h-screen">
      <div className="h-screen flex flex-col">
        <div className="pl-9 pt-9">
          <a
            href="/questions/"
            className="transition duration-500 flex items-center justify-center rounded-full hover:bg-white hover:shadow-xl"
            style={{ width: "50px", height: "50px" }}
          >
            <ArrowBackIosIcon style={{ fontSize: "30px", fontWeight: "bold" }} />
          </a>
        </div>
        {/* <h1 className="text-center font-bold text-4xl py-10">質問</h1> */}
        <div className="editor flex-grow flex-shrink">
          <form className="h-full" onSubmit={handleSubmit}>
            <input
              type="text"
              id="post-title"
              onChange={setTitleData}
              value={title}
              placeholder="タイトル:わからないことや解決したいことを10文字以上で書きましょう!"
              className="px-5 block mx-auto w-4/5 rounded-lg border h-12 text-xl font-bold focus:outline-none mb-8 shadow-lg"
            />
            <div className="flex justify-between h-3/5" style={{ maxHeight: "300px" }}>
              <div className="w-1/2 ml-10">
                <textarea
                  name="md"
                  id="md"
                  placeholder="Markdownで記述"
                  className="markdown-form resize-none w-full h-full border shadow-xl mb-5 rounded-xl focus:outline-none py-4 px-2"
                  value={content}
                  onChange={setContentData}
                ></textarea>
              </div>
              <div className="w-1/2 m-4">
                <PostPreview markdown={content} />
              </div>
            </div>
            <input
              type="submit"
              className="submit-post w-36 h-10 my-8 rounded-md font-bold block mx-auto hover:opacity-70 bg-blue-500 color-white cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
