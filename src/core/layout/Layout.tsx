import { Head, BlitzLayout } from "blitz"
import Header from "./Header"

const Layout: BlitzLayout<{ title?: string; currentPage?: string }> = ({
  title,
  children,
  currentPage = "",
}) => {
  return (
    <>
      <Head>
        <title>{title || "Crypto Rockets Alpha"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header currentPage={currentPage} />
      {children}
    </>
  )
}

export default Layout
