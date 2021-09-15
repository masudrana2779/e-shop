import React from "react";
import type { AppProps } from 'next/app'
import store from "../redux/store";
import {createWrapper} from "next-redux-wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss';
import "react-multi-carousel/lib/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
