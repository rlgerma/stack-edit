import {
  createTheme,
  Stack,
  Text,
  Link,
  FontWeights,
  IStackTokens,
  IStackStyles,
  ITextStyles,
  ThemeProvider,
} from "@fluentui/react";
const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: "960px",
    margin: "0 auto",
    textAlign: "center",
    color: "#605e5c",
  },
};

const ssTheme = createTheme({
  palette: {
    themePrimary: "#f55ca6",
    themeLighterAlt: "#fff8fb",
    themeLighter: "#fde4f0",
    themeLight: "#fccde4",
    themeTertiary: "#f99cc9",
    themeSecondary: "#f670b1",
    themeDarkAlt: "#dc5496",
    themeDark: "#ba477e",
    themeDarker: "#89345d",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#a19f9d",
    neutralSecondary: "#605e5c",
    neutralPrimaryAlt: "#3b3a39",
    neutralPrimary: "#323130",
    neutralDark: "#201f1e",
    black: "#000000",
    white: "#ffffff",
  },
});

function App() {
  return (
    <ThemeProvider applyTo='body' theme={ssTheme}>
      <Stack
        horizontalAlign='center'
        verticalAlign='center'
        verticalFill
        styles={stackStyles}
        tokens={stackTokens}
      >
        <Text variant='xxLarge' styles={boldStyle}>
          Welcome to your Fluent UI app
        </Text>
        <Text variant='large'>
          For a guide on how to customize this project, check out the Fluent UI documentation.
        </Text>
        <Text variant='large' styles={boldStyle}>
          Essential links
        </Text>
        <Stack horizontal tokens={stackTokens} horizontalAlign='center'>
          <Link href='https://developer.microsoft.com/en-us/fluentui#/get-started/web'>Docs</Link>
          <Link href='https://stackoverflow.com/questions/tagged/office-ui-fabric'>
            Stack Overflow
          </Link>
          <Link href='https://github.com/microsoft/fluentui/'>Github</Link>
          <Link href='https://twitter.com/fluentui'>Twitter</Link>
        </Stack>
        <Text variant='large' styles={boldStyle}>
          Design system
        </Text>
        <Stack horizontal tokens={stackTokens} horizontalAlign='center'>
          <Link href='https://developer.microsoft.com/en-us/fluentui#/styles/web/icons'>Icons</Link>
          <Link href='https://developer.microsoft.com/en-us/fluentui#/styles/web'>Styles</Link>
          <Link href='https://aka.ms/themedesigner'>Theme designer</Link>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
