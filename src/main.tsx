import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@yext/search-ui-react/bundle.css";
import App from "./App.tsx";
import {
  provideHeadless,
  SearchHeadlessProvider,
  HeadlessConfig,
} from "@yext/search-headless-react";

const config: HeadlessConfig = {
  // apiKey: "c86d435433eaa875de63ea410bf8ccb6",
  // experienceKey: "test",
  // locale: "en",
  apiKey: "01db1d1e5ebbaa7ea2e6807ad2196ab3",
  experienceKey: "yext-help-hitchhikers-vector-search",
  locale: "en",
  verticalKey: "content",
};
const searcher = provideHeadless(config);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchHeadlessProvider searcher={searcher}>
      <App />
    </SearchHeadlessProvider>
  </StrictMode>
);
