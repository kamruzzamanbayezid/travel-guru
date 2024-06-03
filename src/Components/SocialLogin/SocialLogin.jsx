import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const SocialLogin = () => {

      const { googleLogin, githubLogin, facebookLogin } = useContext(AuthContext);
      const location = useLocation();
      const navigate = useNavigate();

      const socialLogin = (media) => {
            media()
                  .then(() => {
                        toast.success('Successfully Logged in!!')
                        navigate(location?.state ? location?.state : '/')

                  })
                  .catch(error => {
                        toast.error(error.message)
                  })
      }

      return (
            <div>
                  <div className="my-6 space-y-4">
                        <button onClick={() => socialLogin(googleLogin)} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full py-2 space-x-4 border rounded-full focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
                                    <g clipPath="url(#clip0_19_525)">
                                          <path d="M30.9999 16.2335C30.9999 15.1547 30.9128 14.0702 30.7268 13.0089H15.8108V19.1198H24.3525C23.998 21.0907 22.8592 22.8342 21.1915 23.9421V27.9071H26.2875C29.28 25.1432 30.9999 21.0615 30.9999 16.2335Z" fill="#4285F4" />
                                          <path d="M15.811 31.738C20.0761 31.738 23.6729 30.3328 26.2935 27.9071L21.1975 23.942C19.7797 24.91 17.9494 25.4581 15.8168 25.4581C11.6913 25.4581 8.19322 22.665 6.93811 18.9099H1.67944V22.9974C4.36398 28.3561 9.83183 31.738 15.811 31.738Z" fill="#34A853" />
                                          <path d="M6.93237 18.9099C6.26995 16.9391 6.26995 14.8049 6.93237 12.834V8.74651H1.67951C-0.563416 13.2305 -0.563416 18.5134 1.67951 22.9975L6.93237 18.9099Z" fill="#FBBC04" />
                                          <path d="M15.811 6.28C18.0656 6.24501 20.2446 7.09634 21.8774 8.65904L26.3923 4.12836C23.5334 1.43444 19.739 -0.0466314 15.811 1.65404e-05C9.83183 1.65404e-05 4.36398 3.38199 1.67944 8.74651L6.9323 12.834C8.1816 9.07304 11.6854 6.28 15.811 6.28Z" fill="#EA4335" />
                                    </g>
                                    <defs>
                                          <clipPath id="clip0_19_525">
                                                <rect width="31" height="31.7381" fill="white" />
                                          </clipPath>
                                    </defs>
                              </svg>
                              <p className="font-medium">Login with Google</p>
                        </button>

                        <button onClick={() => socialLogin(githubLogin)} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full py-2 space-x-4 border focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-current text-primary">
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                              </svg>
                              <p className="font-medium">Login with GitHub</p>
                        </button>

                        <button onClick={() => socialLogin(facebookLogin)} className="flex items-center justify-center w-full py-2 space-x-4 border focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 rounded-full">
                              <FaFacebook className="text-3xl text-blue-800" />
                              <p className="font-medium">Login with Facebook</p>
                        </button>

                        <button className="flex items-center justify-center w-full py-2 space-x-4 border focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 rounded-full">
                              <FaTwitter className="text-3xl text-blue-800" />
                              <p className="font-medium">Login with Twitter</p>
                        </button>
                  </div>
            </div>
      );
};

export default SocialLogin;