export const cardDetail = ({ theme }) => ({
    display: 'flex',

    '& .ant-modal-content': {
        borderRadius: theme.borderRadiuses.medium,
    },
    '& .ant-modal': {
        paddingBottom: '0',
    },
    '& .ant-modal-body': {
        padding: '0',
    },
    '& .ant-modal-mask': {
        color: 'black',
        backgroundColor: theme.colors.primaryBorderHover,
    },
    '& h4.ant-typography ': {
        marginTop: '0.3rem',
    },
});
export const subTitle = ({ theme }) => ({
    color: theme.colors.secondaryText,
    fontSize: '80%',
});
export const modal = () => ({
    width: '80vw',
});
export const subName = () => ({
    fontWeight: '600',
    fontSize: '90%',
});
export const mainTitle = () => ({
    marginTop: '0rem',
    marginBottom: '0.4rem',
    fontWeight: '600',
    fontSize: '120%',
});
export const secondTitle = () => ({
    marginTop: '0rem',
    marginBottom: '0.4rem',
    fontWeight: '600',
});
export const info = () => ({
    display: 'flex',
    marginTop: '0.3rem',
});
export const textBox = () => ({
    padding: '1rem',
});
export const screenBox = ({ theme }) => ({
    backgroundImage: `url(tile.png)`,
    backgroundRepeat: 'repeat',
    display: 'grid',
    placeItems: 'center',
    borderTopRightRadius: theme.borderRadiuses.medium,
});
export const screenshot = () => ({
    maxWidth: '65%',
    maxHeight: '80%',
});
