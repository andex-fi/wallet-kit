type BackdropTheme = {
    color: string;
    opacity?: number | string;
    backdropFilter?: string;
    offset?: number | string;
  };
  
  type CommonTheme = {
    text: {
      color: string;
    };
    backdrop: BackdropTheme;
  };
  
  type PopupTheme = {
    maxWidth?: number;
    background: {
      color: string;
      backdropFilter?: string;
    };
    border: {
      width: number;
      color: string;
      borderRadius: number;
    };
    shadow: {
        boxShadow: string,
    },
    text: {
      color: string;
    };
    closeCross: {
      color: string;
      hoverColor?: string;
      // pressed?: string;
    };
    title?: {
      fontWeight?: string | number;
    };
    badgeColor: string;
    scroll: {
      color: string;
    };
  };
  
  type ItemTheme = {
    background: {
      color: string;
    };
    border: {
      width: number;
      borderWidth: number;
      borderHoverColor?: string;
      color: string;
      hoverColor?: string;
      pressedColor?: string;
    };
    text: {
      color: string;
    };
    warning: {
      background: {
        color: string;
      };
      text: {
        color: string;
      };
    };
    icon: {
      main: {
        color: string;
      };
      subTitle: {
        color: string;
      };
    };
  };
  
  export type Theme = {
    common: CommonTheme;
    popup: PopupTheme;
    item: ItemTheme;
    customItems?: {
      [item: string]: ItemTheme;
    };
  };
  
  export type ThemeConfig = {
    name: string;
    theme: Theme;
  };
  
  export type ThemesList = {
    [name: string]: ThemeConfig;
  };