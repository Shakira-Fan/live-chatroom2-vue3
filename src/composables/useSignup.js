import {ref} from "vue";
import {projectAuth} from "@/firebase/config";

const error = ref(null)

const signup = async (email, password, displayName) => {
    error.value = null

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error('Could not complete the signup')
        }
        //等待傳入參數email,password的res無誤之後，才去更改displayName的屬性
        await res.user.updateProfile({displayName})
        //另外再將error的值給初始值
        error.value = null

        //再回傳res
        return res
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useSignup = () => {
    return {error, signup}
}

export default useSignup
