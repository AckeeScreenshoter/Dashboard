export const extendButton = {
    button: ({ theme: { colors } }) => ({
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        border: 'none',
        marginBottom: '1rem',

        ':hover': {
            background: colors.primaryBlue,
            color: colors.white,

            '> svg': {
                fill: colors.white,
            },
        },

        '> svg': {
            width: '1.25rem',
            height: 'auto',
            marginRight: '0.75rem',
            transition: 'fill 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
        },
    }),
};
