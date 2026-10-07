import React from "react";
import "./App.css";
import {BrowserRouter as Router, Navigate, Route, Routes, useParams} from "react-router-dom";
import Home from "./pages";
import {detectLanguageFromEnvironment, LanguageProvider} from "./i18n";
import {DEFAULT_LANGUAGE, isLanguage} from "./i18n/languages";

const RootRedirect: React.FC = () => {
  const language = detectLanguageFromEnvironment({pathname: "/"});
  return <Navigate to={`/${language}`} replace />;
};

const LocalizedHome: React.FC = () => {
  const {lang} = useParams();
  if (!isLanguage(lang)) {
    return <Navigate to={`/${DEFAULT_LANGUAGE}`} replace />;
  }
  return <Home />;
};

const App: React.FC = () => {
  return (
    <Router>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/:lang" element={<LocalizedHome />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
};

export default App;
