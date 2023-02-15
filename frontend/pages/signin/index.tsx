import Head from "next/head";
import SingnInForm from "../../components/SignInForm";

const SignIn = () => {
  return (
    <>
      <Head>
        <title>Connectify | Signin</title>
        <meta
          name="description"
          content="Connectify is a social media app made by Ali and Talal."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center min-h-[calc(100vh-70px)]  px-4">
        <SingnInForm />
      </div>
    </>
  );
};
export default SignIn;
