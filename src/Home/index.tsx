import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import { HomeContainer } from "./styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <Calendar />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
