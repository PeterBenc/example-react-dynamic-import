import React, { Suspense } from "react";
import "./App.css";
import { Main } from "./general";
import { BlockchainsEnabledProvider } from "./general/blockchains";
import { QueryClient, QueryClientProvider } from "react-query";
import { printBundleSizes } from "./utils";
import { FullScreenLoading } from "./generic/FullScreenLoading";

printBundleSizes();

// Initialize the QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BlockchainsEnabledProvider>
          <Suspense fallback={<FullScreenLoading />}>
            <Main />
          </Suspense>
        </BlockchainsEnabledProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
