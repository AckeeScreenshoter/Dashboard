export const button = ({ theme, type }) => {
  let color;
  switch (type) {
    case "primary":
      color = theme.colors.primary;
      break;
    case "secondary":
      color = theme.colors.secondaryText;
      break;
    default:
      color = theme.colors.text;
      break;
  }
  return {
    color,
    textTransform: "uppercase",
    border: "none",
    boxShadow: "none",
    paddingLeft: 0,
    fontWeight: 500,
    letterSpacing: 0.4,

    "& .anticon": {
      marginRight: ".5rem",
    },
  };
};
