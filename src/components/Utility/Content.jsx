import { Box, useStyleConfig } from "@chakra-ui/react";
// Container for page width and themeing

const  Content = (props) => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig("Content", { variant });
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default Content;
