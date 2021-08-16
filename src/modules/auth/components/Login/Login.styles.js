export const container = () => ({
    display: 'grid',
    placeItems: 'center',
    minHeight: 'calc(100vh - 140px)',

    '& .ant-card-body': {
        width: '100%',
    },
});
export const card = ({ theme }) => ({
    borderRadius: theme.borderRadiuses.medium,
    minWidth: '30vw',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
    boxShadow: `5px 5px 20px 0px ${theme.colors.secondaryShadow}`,
});
export const title = () => ({
    fontSize: '1.2rem',
    fontWeight: '600',
    textAlign: 'center',
});
export const button = ({ theme }) => ({
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadiuses.small,
    color: theme.colors.white,
    border: 'none',
    fontSize: '0.8rem',
    fontWeight: '600',
    marginTop: '5%',
    height: '40px',
    width: '100%',
    ':hover': {
        border: 'solid 1px',
    },
    '& .anticon': {
        marginRight: '3%',
    },
});
