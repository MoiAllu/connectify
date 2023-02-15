import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useMe } from "../lib/hooks/useMe";
import { useAllPosts, usePost } from "../lib/hooks/usePost";
import Connectify from "../components/Cards/Connectify";

const unSignedPage = ["/signin", "/signup"];
function MyApp({ Component, pageProps }: AppProps, req: any) {
  // const posts = useAllPosts();
  const { user, isError, isLoading } = useMe();
  const router = useRouter();
  return unSignedPage.includes(router.pathname) ? (
    <Component {...pageProps} />
  ) : user ? (
    <Layout user={user} isError={isError} isLoading={isLoading}>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Connectify isVisible={!user} />
  );
}

export default MyApp;
