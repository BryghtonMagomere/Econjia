// ScienceCommunicationPage.js
import React from 'react';
import '../styles/ScienceCommunication.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from '../components/layout';
import ScienceCommunication from './ScienceCommunication';
import { UseLastPathname } from '../utils/trancate';
import SustainabilityTips from './SustainabilityTips';
import EcoNjiaUpdates from './EcoNjiaUpdates';
import SustainableProducts from './SustainableProductsPage';



const BlogDetails = () => {
  console.log("first",UseLastPathname())
  return (
    <Layout>
      {UseLastPathname() ==="is-science-the-solution"?<ScienceCommunication/>:
      UseLastPathname() ==="the-role-of-esg-and-csr-in-building-a-greener-future"?<EcoNjiaUpdates/>:
      UseLastPathname() ==="the-future-of-sustainable-products"?<SustainableProducts/>:<SustainabilityTips/>}
      
    
    </Layout>
  );
};

export default BlogDetails;
