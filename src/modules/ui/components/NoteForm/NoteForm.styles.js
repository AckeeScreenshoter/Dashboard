export const TextArea = ({ theme }) => ({
    fontSize: '90%',
    borderRadius: theme.borderRadiuses.small,
    width: '100%',
    borderColor: theme.colors.icon,
    height: 'auto',
    minHeight: '20%',
});
export const ButtonBox = () => ({
    display: 'flex',
    justifyContent: 'flex-end',

    '& > button': {
        paddingRight: '0',
    },
});
