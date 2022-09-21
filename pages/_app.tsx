import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const unSignedPage = ["/signin", "/signup"];
function MyApp({ Component, pageProps }: AppProps, req: any) {
  const router = useRouter();
  return unSignedPage.includes(router.pathname) ? (
    <Component {...pageProps} />
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
