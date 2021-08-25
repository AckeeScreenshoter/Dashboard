export const TextArea = ({ theme }) => ({
    fontSize: '90%',
    borderRadius: theme.borderRadiuses.small,
    width: '100%',
    marginBottom: '0',

    borderColor: theme.colors.icon,
});
export const FormItem = () => ({
    marginBottom: '0.1rem',
});
export const ButtonBox = () => ({
    marginTop: '0rem',
    display: 'flex',
    justifyContent: 'flex-end',
    '& > .ant-btn[disabled]': {
        border: 'none',
        backgroundColor: 'transparent',
    },

    '& > button': {
        paddingRight: '0',
    },
});
