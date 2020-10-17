import React from "react";
import { Switch, Route } from "react-router-dom";

/** Containers */
import Currency from "./Containers/Currency";
import CurrencyList from "./Containers/CurrencyList";
import NotFound from "./Containers/NotFound";

/** Components */
import Header from "./Components/Header";

/** Contexies */
import { SearchContext } from "./Contexts/Search/SearchContext";
import SearchContextManager from "./Contexts/Search/SearchContextManager";

/** styles */
import { AppWrapper } from "./AppStyles";

function App() {
  const { ...searchContextData } = SearchContextManager();

  return (
    <SearchContext.Provider value={{ ...searchContextData }}>
      <AppWrapper>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={CurrencyList} />
            <Route exact path="/currency/:id" component={Currency} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </AppWrapper>
    </SearchContext.Provider>
  );
}

export default App;
