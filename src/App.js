import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { TopPage } from "./components/pages/TopPage";
import { MenuPage } from "./components/pages/MenuPage";
import { Congestion } from "./components/pages/Congestion";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <ChakraProvider
      theme={extendTheme({
        styles: {
          global: {
            body: {
              backgroundColor: "#f2f0eb",
              color: "gray.800",
              margin: { base: "0 5px", md: "0 15px" },
            },
          },
        },
      })}
    >
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/congestion" element={<Congestion />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
