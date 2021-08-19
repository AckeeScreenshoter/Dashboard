export const loader = ({ inline }) => ({
    ...(!inline && {
        position: 'absolute',
        top: 0,
        left: 0,
    }),
    background: 'white',
    height: '100%',
    width: '100%',
    zIndex: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minWidth: '5rem',
    minHeight: '5rem',
});
export const text = () => ({
    marginTop: '0.5rem',
});
