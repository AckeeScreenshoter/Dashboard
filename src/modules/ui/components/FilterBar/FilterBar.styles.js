export const container = () => ({
    display: 'flex',
    '& .ant-form-item-labe': {
        fontSize: '3rem',
    },
});
export const select = ({ theme }) => ({
    '& .ant-select-selector': {
        borderRadius: theme.borderRadiuses.small + '!important',
        borderColor: theme.colors.secondaryText,
    },
});
export const formItem = ({ theme }) => ({
    '& .ant-form-item-label': {
        padding: '0',
    },
    '& label': {
        fontSize: '80%',
        color: theme.colors.secondaryText,
        fontWeight: '600',
    },
});
