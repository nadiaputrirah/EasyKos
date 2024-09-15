import React from "react";
import Navigation from '../components/Nav/navbar';
import Jumbotron from "../components/Jumbotron/jumbotron";
import Footer from "../components/Footer/footer";
import Product from "../components/Content/product";
import Why from "../components/Content/why";
import Gallery from "../components/Content/gallery";

const Home = () => {

    return (
        <>
        <Navigation/>
        <Jumbotron/>
        <Product/>
        <Why/>
        <Gallery/>
        <Footer/>
        </>
    );
};

export default Home;