export const container = () => ({
    display: 'flex',
    width: '100%',
});
export const row = () => ({
    width: '100%',
});
//  TODO: remove !important
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
        fontSize: '90%',
        color: theme.colors.secondaryText,
        fontWeight: '400',
        height: 'auto !important',
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
