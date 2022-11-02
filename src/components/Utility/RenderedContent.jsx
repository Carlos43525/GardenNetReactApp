import { Box, useStyleConfig } from "@chakra-ui/react";

function RenderedContent(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("RenderedContent", { variant });
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default RenderedContent;
