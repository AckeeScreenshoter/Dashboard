export const TextArea = ({ theme }) => ({
    fontSize: '90%',
    borderRadius: theme.borderRadiuses.small,
    width: '100%',

    borderColor: theme.colors.icon,
    ':hover': {
        boxShadow: 'none',
        borderColor: theme.colors.icon,
    },
});
export const ButtonBox = ({ theme }) => ({
    marginTop: '0.2rem',
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
