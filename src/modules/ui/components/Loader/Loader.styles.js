export const loaderLine = () => ({
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minWidth: '5rem',

    minHeight: '5rem',
});
export const loaderFull = () => ({
    position: 'absolute',
    top: 0,
    left: 0,

    zIndex: 10,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minWidth: '5rem',
    minHeight: '5rem',
});
export const loader = ({ theme }) => ({
    '& i.ant-spin-dot-item': {
        backgroundColor: theme.colors.primary,
    },
});
