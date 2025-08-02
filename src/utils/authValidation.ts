export const isEmailValid = (email: string) => {
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    if (email === '') {
        return true;
    } else {
        return emailRegEx.test(email);
    }
}

export const isPasswordValid = (password: string) => {
    if (password === '') {
        return true;
    } else {
        return password.length >= 8;
    }
}