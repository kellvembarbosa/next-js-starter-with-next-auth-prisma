// theme.js

// 1. import `extendTheme` function
import { background, extendTheme } from "@chakra-ui/react"

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const colors = {
  pmGray: "#202024",
  pmBackground: "#121214",
}

const styles = {
  global: {
    "html, body": {
      color: "gray.600",
      lineHeight: "tall",
      background: "pmBackground",
      fontFamily: "Montserrat, sans-serif",
    },
    a: {
      color: "teal.500",
      textDecoration: "none",
      transition: "all 0.5s ease",
      fontSize: "1rem",
      textTransform: "uppercase",
      fontWeight: 500,
      _hover: {
        color: "#ff039b",
        textDecoration: "none !important",
      },
    },

    li: {
      listStyle: "none",
    },
  },
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

const Button = {
  variants: {
    outline: {
      color: "#fff",
      background: "#5f0ea6",
      transition: "all 0.5s ease",
      outline: "none",
      border: "none !important",
      _hover: {
        background: "#fe059c",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
}

const components = {
  Button,
}
// 3. extend the theme
const theme = extendTheme({ config, colors, styles, components })

export default theme
