import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/boxicons.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-image-lightbox/style.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';

import { Provider } from 'react-redux';
import App from 'next/app';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

export default withRedux(initStore)(
    class MyApp extends App {

        static async getInitialProps ({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {}
            }
        }

        // Preloader
        state = {
            loading: true
        };
        componentDidMount() {
            this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
        }
        componentWillUnmount() {
            if (this.timerHandle) {
                clearTimeout(this.timerHandle);
                this.timerHandle = 0;
            }
        }
        
        render () {
            const { Component, pageProps, store } = this.props

            return (
                <React.Fragment>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                        <title>Tecqify</title>
                    </Head>

                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                    
                    {/* Preloader */}
                    <Loader loading={this.state.loading} />

                    {/* Go Top Button */}
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                </React.Fragment>
            );
        }
    }
)