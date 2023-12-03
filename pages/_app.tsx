import Layout from "@/components/layout"
import "@/styles/globals.css"
import "@/styles/noah_styles.css";
import type { AppProps } from "next/app"
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"],  weight: ["400", "700"]})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={ubuntu.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  )
}
