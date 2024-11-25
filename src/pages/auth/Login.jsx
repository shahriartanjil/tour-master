// import { Alert, message } from "antd";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
// import { createUserLogin } from "../../state/reducers/auth/authSlice";
const Login = () => {
    //   const navigate = useNavigate();
    //   const dispatch = useDispatch();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const myForm = new FormData();
    //     myForm.set("email", email);
    //     myForm.set("password", password);
    //     // dispatch(createUserLogin(myForm));
    // };
    //   const { errorMessage, isAuthenticated } = useSelector((state) => state.user);
    //   useEffect(() => {
    //     if (isAuthenticated) {
    //       message.info("You are Loggedin");

    //       const timerId = setTimeout(() => {
    //           navigate('/');
    //       }, 1000);
    //       return () => clearTimeout(timerId);
    //     }
    //   }, [isAuthenticated, navigate]);
    return (
        <div>
            <Navbar />
            <div className="w-3/4  md:w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md mt-32 mb-8">
                <div className="flex justify-center mx-auto">
                    <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                </div>

                <form className="mt-6">
                    <div>
                        <label htmlFor="username" className="block text-sm text-gray-800 ">Username</label>
                        <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg    focus:outline-none " />
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm text-gray-800 ">Password</label>
                            <a href="#" className="text-xs text-gray-600 hover:underline">Forget Password?</a>
                        </div>

                        <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg" />
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b  lg:w-1/5"></span>

                    <a href="#" className="text-xs text-center text-gray-500 uppercase  hover:underline">
                        or login with Social Media
                    </a>

                    <span className="w-1/5 border-b  lg:w-1/5"></span>
                </div>

                <div className="flex items-center mt-6 -mx-2">
                    <button type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-green-900 rounded-lg hover:bg-green-900 focus:bg-green-900 focus:outline-none">
                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                            </path>
                        </svg>

                        <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                    </button>

                    <a href="#" className="p-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg ">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z">
                            </path>
                        </svg>
                    </a>
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-400"> Dont have an account? <a href="#" className="font-medium text-violet-700 hover:underline">Create One</a></p>
            </div>
            <Footer />

        </div >
    );
};

export default Login;