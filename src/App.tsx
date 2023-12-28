import Layout from "./components/ui/Layout";
import Routes from "./routes";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <Layout>
      <HelmetProvider>
        <Routes />
      </HelmetProvider>
    </Layout>
  );
}
