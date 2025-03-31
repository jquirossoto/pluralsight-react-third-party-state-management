import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "react-hot-toast";
import Routes from "./Routes";
import { CartProvider } from "./context/cartContext";
import { UserProvider } from "./context/userContext";
import "./main.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      throwOnError: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Sorry, an error occurred.</h1>}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <UserProvider>
            <Toaster />
            <Routes />
            <ReactQueryDevtools />
          </UserProvider>
        </CartProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
