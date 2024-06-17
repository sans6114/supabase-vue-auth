import {
  computed,
  ref,
} from 'vue';

import type { User } from '@supabase/supabase-js';

import supabase from '../api/supabase-clients';

//login, logout

export const useAuth = () => {
    const user = ref<User| null>(null);

    const loginWithMagic = async(email: string) => {
     const {error} = await supabase.auth.signInWithOtp({email})
//si hay error ejecuta esto
     if(error){
        console.log(error)
        throw error
      
     }
    }

    //get profile
    const getProfile = async () => {
        try {
            
const {data: sessionData, error: sessionError} = await supabase.auth.getSession() 

if(sessionError){
    console.log(sessionError)
}

 user.value = sessionData.session?.user
if(!user.value) {
    throw new Error('Usuario no encontrado')
}

const email = user.value.email

const {data: profile, error: profileError} = await supabase.from('profiles').select('*').eq('id', user.value.id).single()

if(profileError){
    alert(profileError)
}

return {
    hasUser: computed(() => user.value ? true : false),
    email,
    profile
}
        } catch (error) {
            alert(error)
        } 
    }

    return {
        loginWithMagic,
        getProfile,
        
    }
}