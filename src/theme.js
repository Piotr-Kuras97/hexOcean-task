import { extendTheme } from "@chakra-ui/react";

import "@fontsource/roboto-mono";
import "@fontsource/open-sans";

const theme = extendTheme({
    fonts: {
        body: 'Roboto Mono',
        heading: 'Open Sans'
    },
});

export default theme;