import { Box, useStyleConfig, Container } from "@chakra-ui/react";

function RenderContainer(props) {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("RenderContainer", { variant });
  return (
      <Box __css={styles} {...rest}>
        {children}
      </Box>
  );
}

export default RenderContainer;
