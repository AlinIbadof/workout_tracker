import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    header: {
      backgroundColor: string;
      color: string;
    };
  }
  interface ThemeOptions {
    header?: {
      backgroundColor?: string;
      color?: string;
    };
  }
}
