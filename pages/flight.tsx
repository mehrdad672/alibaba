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
      <div className="sticky top-0">
        <QuickSearch />
      </div>
      <main className="bg-[#f6f6f6]">
        <section id="search-result">
          <SearchResults />
        </section>
      </main>
    </>
  );
};

export default flight;
