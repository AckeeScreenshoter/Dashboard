export const card = ({ theme }) => ({
    display: 'flex',
    alignItems: 'stretch',
    padding: '0.7rem',
    borderRadius: theme.borderRadiuses.small,
    border: `2px solid ${theme.colors.white}`,
    boxShadow: `5px 5px 20px 0px ${theme.colors.secondaryShadow}`,
    width: '100%',
    height: '100%',

    '& h3.ant-typography': {
        fontSize: '1.125rem',
        marginTop: '.5rem',
        marginBottom: '.5rem',
    },

    '& > .ant-card-body': {
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },

    '&  img': {
        width: '100%',
        height: '14vh',
        objectFit: 'cover',
        borderRadius: theme.borderRadiuses.small,
    },

    ':hover': {
        borderColor: theme.colors.primaryBorderHover,
        boxShadow: `5px 5px 20px 0px ${theme.colors.primaryShadow}`,

        '& h3.ant-typography': {
            color: theme.colors.primary,
        },
    },
});

export const contentWrapper = () => ({
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1rem',
    justifyContent: 'space-between',
    height: '100%',
});

export const createdAt = ({ theme }) => ({
    color: theme.colors.secondaryText,
    fontSize: '.875rem',
});

export const cardHeader = ({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',

    '& > .anticon': {
        color: theme.colors.icon,
    },
});
