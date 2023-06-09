import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Timestamp } from "firebase/firestore";
import { useRecoilValue } from "recoil";

import { signInUserState } from "@/store/Auth/auth";
import PostPreview from "./PostPreview";
import { addQuestion } from "./add_question";

interface Question {
  mId: string | string[];
  uId: string;
  title: string;
  content: string | undefined;
  updatedAt: Timestamp;
  createdAt: Timestamp;
}

interface Props {
  mId: string | string[];
}

export default function PostForm({ mId }: Props) {
  const { uid, accessToken } = useRecoilValue(signInUserState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

    // タイトルが10文字以上でない場合は送信を拒否する
    if (title.length < 5) {
      return;
    }

    // コンテンツが空文字列の場合は送信を拒否する
    if (!content.trim()) {
      return;
    }

    const createdAt = Timestamp.now();
    const updatedAt = Timestamp.now();
    const question: Question = await addQuestion({
      mId,
      uId: uid,
      title,
      content,
      createdAt,
      updatedAt,
    });
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
        <div className="editor flex-grow flex-shrink">
          <form className="h-full" onSubmit={handleSubmit}>
            <input
              type="text"
              id="post-title"
              onChange={setTitleData}
              value={title}
              placeholder="タイトル:わからないことや解決したいことを10文字以上で書きましょう!"
              className="px-5 block mx-auto w-4/5 rounded-lg border h-12 text-xl font-bold focus:outline-none mb-8 shadow-lg"
              minLength={5} // 最小文字数の指定
              required // 入力必須の指定
            />
            <div className="flex justify-between h-3/5" style={{ maxHeight: "300px" }}>
              <div className="w-1/2 ml-10">
                <textarea
                  name="md"
                  id="md"
                  placeholder="Markdownで記述"
                  className="markdown-form resize-none w-full h-full border shadow-xl mb-5 rounded-xl focus:outline-none py-4 px-2"
                  value={content}
                  required // 入力必須の指定
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
