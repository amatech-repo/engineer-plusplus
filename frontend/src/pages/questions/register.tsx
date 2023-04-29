import PostForm from "@/components/Questions/PostForm";
import Layout from "@/components/Layouts/layout";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

import { signInUserState } from "@/store/Auth/auth";

const PostQuestion = () => {

  const router = useRouter();
  const { mId } = router.query;

  return (
    <>
      <Layout>
        <PostForm mId={mId ?? ""} />
      </Layout>
    </>
  );
};

export default PostQuestion;
