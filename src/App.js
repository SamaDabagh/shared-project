{
  /* All commented out lines MUST be commented in
        Line 15 (<ProductInformationPage code="5002" />) must be commented out */
}
// import { Components } from "react";
import ProductInformationPage from "./pages/product-information-page/product-information-page";
import LandingPage from "./pages/landing-page/landing-page";
import Header from "./header/header";
import Footer from "./footer/footer";
// class App extends Components {
//   state = {
//     tempGroups: [
//       {
//         name: "Health and beauty",
//         id: 1,
//       },
//       {
//         name: "Health and beauty-2",
//         id: 2,
//       },
//     ],
//   };

function App() {
  return (
    <div className="App">
      <Header />

      {/* <ProductInformationPage code="5002" /> */}
      <LandingPage code="5002" />

      <Footer />
    </div>
  );
}
// }

export default App;
