import { postCheckEmail } from "@api/user/api";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { isEmailValid } from "./authValidation";

export const useEmailDebounce = (email : string) => {
// 타이머 ID 저장을 위한 ref 생성
const debounceTimerRef = useRef<NodeJS.Timeout | null>(null); 
const [emailHelperText, setEmailHelperText] = useState("")

// 3. 중복 이메일 검사 API 호출 함수
const checkEmailAvailability = async () => {
    try {
    const response = await postCheckEmail({email}); 
    if (response.isUsableEmail) setEmailHelperText(""); 
} catch (error) {
    // 4. emailErrorMessage 상태 업데이트 (이메일 중복 검사 결과 메시지)
    if(axios.isAxiosError(error) && error.response?.status === 409){
        setEmailHelperText(error.response.data.message)
    }
}
}

// 2. email 상태 변경에 따른 useEffect 실행
useEffect(() => {
    if(!email || !isEmailValid(email)) return; 

    // set new timer : 500ms 이후 함수 호출
    debounceTimerRef.current = setTimeout(() => {
        // 이메일 중복 검사 API 호출
        checkEmailAvailability(); 
    }, 500)

    // cleanup timeID
    return () => {
        if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
        setEmailHelperText(''); 
    }
};
}, [email]); 

    return emailHelperText; // "이미 존재하는 이메일입니다." 반환
}