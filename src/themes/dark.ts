import { getThemeWithFallback } from "./helpers";

const theme = {
  common: {
    text: {
      color: "#FFFFFF",
    },
    backdrop: {
      color: "rgba(0, 0, 0, 0.2)",
      opacity: 0.5,
      backdropFilter: "blur(9px)",
    },
  },
  popup: {
    background: {
      color: "#19102D",
      backdropFilter: "blur(9px)",
    },
    border: {
      width: 2,
      color: "#19102D",
      borderRadius: 24,
    },
    shadow: {
        boxShadow: "0px 16px 64px rgba(55, 0, 98, 0.2)",
    },
    closeCross: {
      color: "#436177",
      hoverColor: "#FFFFFF",
    },
    badgeColor: "#3B4363",
    scroll: {
      color: "#3A3A51",
    },
  },
  item: {
    background: {
      color: "#34184B",
    },
    border: {
      width: 0,
      borderWidth: 0,
      borderHoverColor: "transparent",
      color: "#34184B",
      hoverColor: "#9368f7",
      pressedColor: "#9368f7",
    },
    warning: {
      background: {
        color: "#F8D660",
      },
      text: {
        color: "#3A3A51",
      },
    },
    icon: {
      main: {
        color: "#9292B5",
      },
      subTitle: {
        color: "#A2AAAD",
      },
    },
  },
};

const darkTheme = {
  name: "dark" as const,
  theme: getThemeWithFallback(theme),
};

export default darkTheme;
