import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import { FC, useMemo, useState } from "react";
import { ColorModeContext } from "shared/contexts";
export const muiCache = createCache({
  key: "mui",
  prepend: true,
});

const withMui = <P extends object>(Component: FC<P>): FC<P> => {
  return function WithMui(props) {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const [mode, setMode] = useState<"light" | "dark">(
      prefersDarkMode ? "dark" : "light"
    );
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        },
      }),
      []
    );

    const theme = useMemo(() => {
      return createTheme({
        palette: {
          mode,
        },
      });
    }, [mode]);

    return (
      <CacheProvider value={muiCache}>
        <StyledEngineProvider injectFirst>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider<typeof theme> theme={theme}>
              <CssBaseline />
              <Component {...props} />
            </ThemeProvider>
          </ColorModeContext.Provider>
        </StyledEngineProvider>
      </CacheProvider>
    );
  };
};
export default withMui;
