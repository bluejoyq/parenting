import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EpisodePage } from "./episode/pages/EpisodePage";
import { Box, CssBaseline, CssVarsProvider, extendTheme } from "@mui/joy";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { css } from "@emotion/react";
import {
  DICTONARY_PATH,
  EPISODE_PATH,
  EXAMPLE_PATH,
  HOME_PATH,
  LOGIN_PATH,
  SCENARIO_PATH,
} from "./common/constants/paths";
import { HomePage } from "./home/HomePage";
import { EpisodeDetailPage } from "./episode/pages/EpisodeDetailPage";
import { LoginPage } from "./login/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScenarioPageFallback } from "./scenario/ScenarioPageFallback";
import { EpisodeResultPage } from "./episode/pages/EpisodeResultPage";
import { DictionaryPage } from "./dictionary/DictionaryPage";
import { ExamplePage } from "./example/pages/ExamplePage";
import { ExampleDetailPageFallback } from "./example/pages/ExampleDetailPage";

const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <HomePage />,
  },
  {
    path: EPISODE_PATH,
    children: [
      {
        path: "",
        element: <EpisodePage />,
      },
      {
        path: ":id",
        children: [
          {
            path: "",
            element: <EpisodeDetailPage />,
          },
          {
            path: "result",
            element: <EpisodeResultPage />,
          },
          {
            path: `${SCENARIO_PATH}/:scenarioId`,
            element: <ScenarioPageFallback />,
          },
        ],
      },
    ],
  },
  {
    path: LOGIN_PATH,
    element: <LoginPage />,
  },
  {
    path: DICTONARY_PATH,
    element: <DictionaryPage />,
  },
  {
    path: EXAMPLE_PATH,
    children: [
      {
        path: "",
        element: <ExamplePage />,
      },
      {
        path: ":id",
        element: <ExampleDetailPageFallback />,
      },
    ],
  },
]);
const queryClient = new QueryClient();

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          500: "#96e6a1",
        },
      },
    },
  },
});
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      css={css`
        width: 100vw;
        height: 100vh;
        max-width: 390px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        position: relative;
        background-color: #fff;
      `}
    >
      {children}
    </Box>
  );
};
export const App = () => {
  return (
    <>
      <CssVarsProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <RouterProvider router={router} />
            <ToastContainer />
          </Layout>

          <CssBaseline />
        </QueryClientProvider>
      </CssVarsProvider>
    </>
  );
};

export default App;
