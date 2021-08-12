export const card = ({ theme }) => ({
	display: "flex",
	alignItems: "stretch",
	padding: "1rem",
	borderRadius: theme.borderRadius.small,
	border: `2px solid ${theme.colors.white}`,
	boxShadow: `5px 5px 20px 0px ${theme.colors.secondaryShadow}`,
	height: "100%",

	"& h3.ant-typography": {
		fontSize: "1.125rem",
		marginTop: ".5rem",
		marginBottom: ".5rem",
	},

	"& > .ant-card-body": {
		paddingLeft: "1rem",
		paddingTop: 0,
		paddingBottom: 0,
		paddingRight: 0,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		flexBasis: "69%",
	},

	"& > .ant-card-cover": {
		flexBasis: "31%",

		"& > img": {
			width: "100%",
			objectFit: "cover",
		},
	},

	":hover": {
		borderColor: theme.colors.primaryBorderHover,
		boxShadow: `5px 5px 20px 0px ${theme.colors.primaryShadow}`,

		"& h3.ant-typography": {
			color: theme.colors.primary,
		},
	},
});

export const contentWrapper = () => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	height: "100%",
});

export const createdAt = ({ theme }) => ({
	color: theme.colors.secondaryText,
	fontSize: ".875rem",
});

export const cardHeader = ({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",

	"& > .anticon": {
		color: theme.colors.icon,
	},
});
