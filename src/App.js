import { useState } from "react";
import PrivateRouter from "./routes/PrivateRouter";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme/theme";

//Components
import NavBar from "./components/NavBar";

//Redux
import { Provider } from "react-redux";
import store from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  //Set the persist store
  const persistor = persistStore(store);

  //Set theme initial state
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  //Saving newTheme in state and persisting in localStorage
  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <NavBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <PrivateRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
