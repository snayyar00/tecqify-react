import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ProjectsTwoGrid from '../components/Projects/ProjectsTwoGrid';
import Footer from '../components/Layout/Footer';

class Projects3 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader 
                    pageTitle="Projects Style Four" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Projects Style Four" 
                />
                <ProjectsTwoGrid />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Projects3;