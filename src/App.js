import SigninPage from "./Pages/SigninPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import ProfilePage from "./Pages/ProfilePage";
import ContributionPage from "./Pages/ContributionPage";
import Map from "./Pages/Map";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/SigninPage" element={<SigninPage />} />
        <Route
          exact
          path="/ForgotPasswordPage"
          element={<ForgotPasswordPage />}
        />
        <Route exact path="/Profile" element={<ProfilePage />} />
        <Route exact path="/Contribution" element={<ContributionPage />} />
        <Route exact path="/Maps" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
