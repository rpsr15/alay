import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { authContext } from '../hooks/useAuth';
import Router, { useRouter } from 'next/router';
import Button from './Button';
const LoginForm = () => {

    const auth = useContext(authContext)
    console.log(auth)
    const router = useRouter()
    const { register, errors, handleSubmit } = useForm();
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const onSubmit = async (data) => {
        setIsLoading(true)
        setError(null)
        console.log(data);
        try {
            const result = await auth.logIn(data.email, data.password)
            router.push('/dashboard')
        } catch (error) {
            // console.log(error)
            setError(error)
        } finally {
            setIsLoading(false)
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Email address
                </label>
                <div className="mt-1 rounded-md">
                    <input
                        id="email"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm"
                        type="email"
                        name="email"
                        {...register("email", {
                            required: "Please enter an email",
                        })}

                    />
                    {
                        error?.message && (
                            <div className='mb-4 text-red-500 text-center border-dashed border  border-red-600 p-2 rounded'>
                                <span>{error.message}</span>
                            </div>
                        )
                    }

                </div>
            </div>
            <div className="mt-4">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Password
                </label>
                <div className="mt-1 rounded-md">
                    <input
                        id="password"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 shadow-sm"
                        type="password"
                        name="password"
                        {...register("password", {
                            required: "Please enter an password",
                        })}
                    />
                </div>
            </div>
            <div className="mt-4">
                <span className="block w-full rounded-md shadow-sm">
                    <Button
                        title={'Log In'}
                        isLoading={isLoading}
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    />
                </span>
            </div>
        </form>
    )
}

export default LoginForm