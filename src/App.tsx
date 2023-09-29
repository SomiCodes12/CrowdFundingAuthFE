import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <div>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={mainRouter} />
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
};

export default App;
