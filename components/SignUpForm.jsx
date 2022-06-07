import { useRouter } from "next/router"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { authContext } from "../hooks/useAuth"


const SignUpForm = () => {
    const { register, errors, handleSubmit } = useForm()
    const auth = useContext(authContext)
    const router = useRouter()
    const onSubmit = (data) => {
        console.log(data)
        return auth.signUp(data).then((user)=> {
            console.log(user)
        })
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md shadow-sm">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Name
                </label>
                <input
                    id="name"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    type="text"
                    name="name"
                    {...register("name", {
                        required: "Please enter an name",
                    })}
                />

            </div>
            <div className="mt-6">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Email address
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                    <input
                        id="email"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        type="email"
                        name="email"
                        {...register("email", {
                            required: "Please enter an email",
                        })}
                    />

                </div>
            </div>
            <div className="mt-6">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                    <input
                        id="password"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        type="password"
                        name="password"
                        {...register("password", {
                            required: "Please enter an password",
                        })}
                    />

                </div>
            </div>
            <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                        Sign up
                    </button>
                </span>
            </div>
        </form>
    )
}

export default SignUpForm