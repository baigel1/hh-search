import {
  GenerativeDirectAnswer,
  ResultsCount,
  SearchBar,
  VerticalResults,
} from "@yext/search-ui-react";
import "./App.css";
import ResultCard from "./Components/ResultCard";
import SourceCard from "./Components/SourceCard";
//loading state
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSearchState } from "@yext/search-headless-react";

function App() {
  const gdaLoading = useSearchState(
    (state) => state.generativeDirectAnswer.isLoading
  );
  return (
    <>
      <SearchBar />
      <ResultsCount />
      <div className="my-4">{gdaLoading && <Skeleton count={5} />}</div>
      <GenerativeDirectAnswer CitationCard={SourceCard} />
      <VerticalResults CardComponent={ResultCard} />
    </>
  );
}

export default App;
