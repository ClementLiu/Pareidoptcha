import { useTheme, styled } from "@material-ui/core";

const TitleTest = styled("div")((props) => {
  const theme = useTheme();
  return {
    backgroundColor:
      props.level === "beginner"
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
  };
  // : theme.palette.secondary.main,
});
export default TitleTest;
