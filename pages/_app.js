import "../styles/globals.css";
import Layout from "../components/Layouts/layout";
import { SessionProvider } from "next-auth/react";
import CheckoutContextProvider from "../components/CheckoutContextProvider";
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <CheckoutContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CheckoutContextProvider>
    </SessionProvider>
  );
}
