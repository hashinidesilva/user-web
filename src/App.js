import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/users"/>}/>
          <Route path="/users">
            <Route index element={<Users/>}/>
            <Route path="create" element={<NewUser/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/users"/>}/>
        </Routes>
      </Layout>
  );
}

export default App;
