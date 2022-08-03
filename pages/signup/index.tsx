import type { NextPage } from "next";
import Head from "next/head";
import SignUpForm from "../../components/SignUpForm";

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>Connectify | Signup</title>
        <meta
          name="description"
          content="Connectify is a social media app made by Ali and Talal."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center min-h-[calc(100vh-70px)]  px-4">
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;
