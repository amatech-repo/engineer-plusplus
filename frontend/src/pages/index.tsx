import Head from "next/head";
import { Inter } from "next/font/google";

import { useAuth } from "@/context/AuthContext";
import Dashboard from "./dashboard";
import Layout from "@/components/Layouts/layout";
import Login from "./auth/login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { currentUser } = useAuth();
  console.log(currentUser)

  return (
    <>
      <Head>
        <title>Engineer++</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {currentUser ? (
          <Layout>
            <Dashboard />
          </Layout>
        ) : (
          <Login />
        )}
      </main>
    </>
  );
}
