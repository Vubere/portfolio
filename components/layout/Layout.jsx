import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="mt-[70px] lg:h-[698px]">{children}</div>
    </>
  );
}
