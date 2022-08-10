export const container = ({ theme: { colors } }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: colors.secondaryText,
    height: '60px',
});

export const heading = ({ theme: { colors } }) => ({
    color: colors.primary,
    textTransform: 'uppercase',
});
export const menu = () => ({
    display: 'flex',
    alignItems: 'center',
});
export const text = () => ({
    display: 'none',
    marginRight: '2rem',

    tablet: {
        display: 'block',
    },
});
