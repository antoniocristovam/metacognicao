import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    gray: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};

const theme = extendTheme({ colors, config });

export default theme;
