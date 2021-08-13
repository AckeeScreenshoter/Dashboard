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
