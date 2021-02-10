import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ProjectsThreeGrid from '../components/Projects/ProjectsThreeGrid';
import Footer from '../components/Layout/Footer';

class Projects3 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageHeader 
                    pageTitle="Projects Style Three" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Projects Style Three" 
                />
                <ProjectsThreeGrid />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Projects3;