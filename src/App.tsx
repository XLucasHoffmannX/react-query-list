import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserList } from "./components/UserList/UserList";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
