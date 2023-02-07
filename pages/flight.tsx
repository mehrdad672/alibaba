import { useRouter } from "next/router";
import Footer from "../components/footer";
import Header from "../components/Header";
import QuickSearch from "../components/search/quickSearch";
import SearchResults from "../components/search/searchResults";

type Props = {};

const flight = (props: Props) => {
  
  return (
    <>
      <section className="bg-white shadow-lg font-iran">
        <Header />
      </section>
      <div className="sticky z-30 top-0">
        <QuickSearch />
      </div>
      <main className="bg-[#f6f6f6]">
        <section id="search-result">
          <SearchResults transportation="flights" />
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default flight;
