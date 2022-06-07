import { useState, useEffect } from "react";
import Link from 'next/link';
import SignUpForm from "../components/SignUpForm";
import { authContext } from '../hooks/useAuth'
import { useContext } from "react";
import { useRouter } from "next/router";
import { async } from "@firebase/util";
export default function SignUp(props) {
    const user = useContext(authContext).user
    const router = useRouter()
    const handleSubmit = (e) => {
        console.log(email, password)
        e.preventDefault()
    };
    const onChange = (e) => {
        const target = e.target.name
        const value = e.target.value
        switch (target) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;

        }
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        console.log('meow',user)
        if( user !== 'undefined' && user !== null){
            router.push('dashboard')
        }
      }, [user])
    
    return (
       <>{
           (user === null && user === 'undefined') ?  <div className="min-h-screen flex bg-gray-200">
           <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
               <div className="text-center mt-24">
                   <h2 className="mt-6 text-center text-3xl leading-9 font-   extrabold text-gray-900">Sign up</h2>
                   <p className="mt-2 text-center text-md text-gray-600">
                       already have an account?{' '}
                       <Link href="/login">
                           <a href="#" className="text-blue-500">Log in</a>
                       </Link>
                   </p>
               </div>
               <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                   <SignUpForm/>
               </div>
           </div>
       </div>:<div></div>
       }</>
    );
}
