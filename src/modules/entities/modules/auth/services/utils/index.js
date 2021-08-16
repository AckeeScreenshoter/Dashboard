export function extractUserData(user) {
    const { displayName: name, email, photoURL, providerId } = user.providerData[0];

    return {
        id: user.uid,
        name,
        email,
        photoURL,
        providerId,
    };
}
