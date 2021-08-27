export const item = () => ({
    display: 'flex',
    height: '100%',
    width: '100%',
    marginTop: '0.5rem',
});
export const card = ({ theme }) => ({
    display: 'flex',
    padding: '0rem',
    alignItems: 'stretch',
    borderRadius: theme.borderRadiuses.small,
    border: `2px solid ${theme.colors.white}`,
    boxShadow: `5px 5px 20px 0px ${theme.colors.secondaryShadow}`,
    width: '100%',
    height: '100%',
    '& > .ant-card-body': {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        padding: '0.7rem',
    },
});

export const imgPlaceholder = ({ theme }) => ({
    height: '14vh',

    width: '30%',
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadiuses.small,
});
export const textPlaceholder = () => ({
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    justifyContent: 'space-between',
});

export const date = ({ theme }) => ({
    borderRadius: theme.borderRadiuses.small,
    backgroundColor: theme.colors.background,
    height: '0.5rem',
    width: '100%',
});
export const title = ({ theme }) => ({
    borderRadius: theme.borderRadiuses.small,
    backgroundColor: theme.colors.background,
    height: '1rem',
    width: '100%',
});
export const button = ({ theme }) => ({
    borderRadius: theme.borderRadiuses.small,
    backgroundColor: theme.colors.background,
    height: '2rem',
    width: '45%',
});

export const buttoBox = () => ({
    display: 'flex',
    justifyContent: 'space-between',
});
