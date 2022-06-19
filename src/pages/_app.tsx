import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box padding='20px 0 20px 0' bgColor='gray.400'>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;

