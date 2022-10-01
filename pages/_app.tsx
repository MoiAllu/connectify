import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useMe } from "../lib/hooks/useMe";

const unSignedPage = ["/signin", "/signup"];
function MyApp({ Component, pageProps }: AppProps, req: any) {
  const { user } = useMe();
  const router = useRouter();
  return unSignedPage.includes(router.pathname) ? (
    <Component {...pageProps} />
  ) : (
    <Layout user={user}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
