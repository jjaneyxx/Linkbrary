export const isEmailValid = (email: string) => {
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    // 화면이 처음 렌더링 될 때 헬퍼 텍스트가 표시되는 이슈 > false 에서 true 로 변경
    if (email === '')  return true; 
    return emailRegEx.test(email);
}

export const isPasswordValid = (password: string) => {
    // 화면이 처음 렌더링 될 때 헬퍼 텍스트가 표시되는 이슈 > false 에서 true 로 변경
    if (password === '') return true; 
    return password.length >= 8;
}

export const isUserNameValid = (userName : string) => {
    return userName.length <= 10;
}
export const isPasswordConfirmValid = (password : string, passwordConfirm : string) => {
    return password === passwordConfirm;
}
