import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import PartnerLogo from '../components/Partner/PartnerLogo';
import Footer from '../components/Layout/Footer';


class Partner extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader 
                    pageTitle="Partner" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Partner" 
                />
                <PartnerLogo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Partner;