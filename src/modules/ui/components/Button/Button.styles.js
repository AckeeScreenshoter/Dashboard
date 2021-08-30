export const button = ({ theme, type }) => {
    let color;
    switch (type) {
        case 'primary':
            color = theme.colors.primary;
            break;
        case 'secondary':
            color = theme.colors.secondaryText;
            break;
        default:
            color = theme.colors.text;
            break;
    }
    return {
        color,
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        border: 'none',
        boxShadow: 'none',
        fontSize: '90%',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 500,
        letterSpacing: 0.4,

        '& .anticon': {
            marginRight: '.5rem',
        },
        '& > svg': {
            marginLeft: '.5rem',
        },
    };
};
