import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-violet-950 text-white min-h-screen min-w-full">
      <Header />
      <main className="flex justify-center align-center px-24 py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
