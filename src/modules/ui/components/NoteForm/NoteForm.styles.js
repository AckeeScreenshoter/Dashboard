export const TextArea = ({ theme }) => ({
    fontSize: '90%',
    borderRadius: theme.borderRadiuses.small,
    width: '100%',
    marginBottom: '0',

    borderColor: theme.colors.icon,
    ':hover': {
        boxShadow: 'none',
        borderColor: theme.colors.icon,
    },
});
export const FormItem = () => ({
    marginBottom: '0',
});
export const ButtonBox = ({ theme }) => ({
    marginTop: '0rem',
    display: 'flex',
    justifyContent: 'flex-end',
    '& > .ant-btn[disabled]': {
        border: 'none',
        backgroundColor: 'transparent',
    },
    '&  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector':
        {
            borderColor: 'red',
            boxShadow: `5px 5px 20px 0px ${theme.colors.primary}`,
        },
    '& > button': {
        paddingRight: '0',
    },
});
