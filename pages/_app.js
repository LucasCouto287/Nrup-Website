import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from "../styles";


class PortfolioApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
