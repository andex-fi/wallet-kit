import { getThemeWithFallback } from "./helpers";

const theme = {
  common: {
    text: {
      color: "#13173E",
    },
    backdrop: {
      color: "#ebf1ff",
      opacity: 0.5,
      backdropFilter: "blur(9px)",
    },
  },
  popup: {
    background: {
      color: "#ffffff",
      backdropFilter: "blur(9px)",
    },
    border: {
      width: 2,
      color: "#ffffff",
      borderRadius: 24,
    },
    shadow: {
        boxShadow: "0px 16px 64px rgba(55, 0, 98, 0.2)",
    },
    closeCross: {
      color: "#13173E",
      hoverColor: "#8BA9BC",
    },
    badgeColor: "#ACACB5",
    scroll: {
      color: "#E4E4EB",
    },
  },
  item: {
    background: {
      color: "#F4F5FA",
    },
    border: {
      width: 0,
      borderWidth: 0,
      borderHoverColor: "transparent",
      color: "#F4F5FA",
      hoverColor: "rgba(217, 197, 232, 0.6)",
      pressedColor: "rgba(217, 197, 232, 0.6)",
    },
    warning: {
      background: {
        color: "#FFE79F",
      },
      text: {
        color: "#3A3A51",
      },
    },
    icon: {
      main: {
        color: "#695773",
      },
      subTitle: {
        color: "#A2AAAD",
      },
    },
  },
};

const lightTheme = {
  name: "light" as const,
  theme: getThemeWithFallback(theme),
};

export default lightTheme;
