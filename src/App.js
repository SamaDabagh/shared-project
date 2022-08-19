        {/* All commented out lines MUST be commented in
        Line 15 (<ProductInformationPage code="5002" />) must be commented out */}

import ProductInformationPage from "./pages/product-information-page/product-information-page";

// import Header from "./header/header";
// import Footer from "./footer/footer";

function App() {
  return (
    <div className="App">

      {/* <Header /> */}

      <ProductInformationPage code="5002" />
      {/* <LandingPage groups={tempGroups} /> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
