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
    ':hover': {
        borderColor: theme.colors.secondaryText,
    },
    '& .ant-select-focused': {
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
export const dropdown = ({ theme }) => ({
    borderRadius: theme.borderRadiuses.small,
    '& .ant-select-item-selected': {
        backgroundColor: theme.colors.primaryBorderHover,
    },
    '& .ant-select-item-option-active': {
        backgroundColor: theme.colors.primaryBorderHover,
    },
    '& .ant-select-item-option-selected:not(.ant-select-item-option-disabled)': {
        backgroundColor: theme.colors.primaryBorderHover,
    },
});
