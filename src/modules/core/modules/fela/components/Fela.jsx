import React from "react";
import PropTypes from "prop-types";
import { createRenderer } from "fela";
import { RendererProvider, ThemeProvider } from "react-fela";
import { theme } from "styles";

import { applyFonts } from "../utilities";
import { rendererConfig, fonts } from "../config";

function Fela({ children }) {
  const renderer = createRenderer(rendererConfig);

  React.useEffect(() => {
    applyFonts(renderer, fonts);

    return () => {
      renderer.clear();
    };
  }, [renderer]);

  return (
    <RendererProvider renderer={renderer}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RendererProvider>
  );
}

Fela.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Fela;
