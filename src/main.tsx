import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./globals.css"
import "@fontsource/inter"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>,
)
