export const title = {
    title: () => ({
        fontSize: '2rem',
    }),
};

export const text = {
    text: ({ theme: { colors } }) => ({
        color: colors.blueyGrey,
        marginBottom: '2.625rem',
        textAlign: 'center',
    }),
};

export const button = {
    button: ({ theme: { colors } }) => ({
        width: '100%',
        display: 'flex',
        justifyContent: 'center',

        '> svg': {
            width: '20px',
            height: '20px',
            marginRight: '10px',
            fill: colors.white,
        },
    }),
};
