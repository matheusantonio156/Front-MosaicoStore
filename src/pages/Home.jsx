import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProdutosContainer from "../components/ProdutosContainer";
import "../styles/Home.css";
import Searchbar from "../components/Searchbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <hr className="divider" />
      <ProdutosContainer title={"PRODUTOS EM ALTA"} />
      <Footer />
    </>
  );
}
