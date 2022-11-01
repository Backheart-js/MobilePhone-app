import { BrowserRouter, Routes, Route } from "react-router-dom";

import "~/App.scss";
import { publicRouter } from "./routers";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRouter.map((router, index) => {
            const Layout = router.layout;
            const Page = router.component;
  
            return (
              <Route
                key={index}
                path={router.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
