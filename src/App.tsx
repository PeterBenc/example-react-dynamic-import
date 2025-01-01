import React from "react";
import "./App.css";
import { Main } from "./general";
import { BlockchainsEnabledProvider } from "./general/blockchains";
import { QueryClient, QueryClientProvider } from "react-query";
import { printBundleSizes } from "./utils";

printBundleSizes();

// Initialize the QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BlockchainsEnabledProvider>
          <Main />
        </BlockchainsEnabledProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
