import { Link, useNavigate } from "react-router-dom";
import NewNavbar from "../../Components/NewNavbar/NewNavbar";
import Button from "../../Components/Shared/Button";
import { useForm } from "react-hook-form";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {

      const { createUser, userUpdate } = useContext(AuthContext);
      const navigate = useNavigate()

      // using react hook form
      const { register, handleSubmit, formState: { errors } } = useForm()
      const onSubmit = (data) => {
            const { name, email, url, password } = data;

            // crate user
            createUser(email, password)
                  .then(() => {

                        // update profile
                        userUpdate(name, url)
                              .then(() => {
                                    toast.success('User Create successfully!!');
                                    navigate('/')
                              })
                              .catch(error => {
                                    toast.error(error.message)
                              })
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })
      }

      return (
            <div>
                  <NewNavbar />

                  <div className="w-full mx-auto max-w-xl rounded-md sm:p-8  dark:text-gray-800">
                        <div className="border border-[#ABABAB] bg-[#ffffff33] rounded-md p-8">
                              <h2 className="mb-3 text-3xl font-bold ">Create an Account!!</h2>
                              <p className="text-base font-medium  dark:text-gray-600 mb-5">Already have an account?
                                    <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline text-[#F9A51A]"> Log in</Link>
                              </p>

                              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 ">
                                    <div className="space-y-4">
                                          <div className="space-y-2">
                                                <input type="text" name="name" id="name" placeholder="Your name" className="w-full px-3 py-2 border-b border-[#C5C5C5] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 placeholder:text-[#000000] placeholder:text-base placeholder:font-medium outline-none"
                                                      {...register("name", { required: true })}
                                                />
                                                {errors.name && <span className="text-red-600">This field is required</span>}
                                          </div>
                                          <div className="space-y-2">

                                                <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border-b border-[#C5C5C5] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 placeholder:text-[#000000] placeholder:text-base placeholder:font-medium outline-none"
                                                      {...register("email", { required: true })}
                                                />
                                                {errors.email && <span className="text-red-600">This field is required</span>}
                                          </div>
                                          <div className="space-y-2">

                                                <input type="url" name="photoUrl" id="photoUrl" placeholder="Photo Url" className="w-full px-3 py-2 border-b border-[#C5C5C5] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 placeholder:text-[#000000] placeholder:text-base placeholder:font-medium outline-none"
                                                      {...register("url", { required: true })}
                                                />
                                                {errors.url && <span className="text-red-600">This field is required</span>}
                                          </div>
                                          <div className="space-y-2">
                                                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-3 py-2 border-b border-[#C5C5C5] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 placeholder:text-[#000000] placeholder:text-base placeholder:font-medium outline-none"
                                                      {...register("password", { required: true })}
                                                />
                                                {errors.password && <span className="text-red-600">This field is required</span>}
                                          </div>
                                    </div>
                                    <Button text='Register' width="100%" />
                              </form>
                        </div>

                        <div className="px-10">
                              <div className="flex items-center w-full my-4">
                                    <hr className="w-full dark:text-gray-600" />
                                    <p className="px-3 dark:text-gray-600 text-[#000000] font-medium">OR</p>
                                    <hr className="w-full dark:text-gray-600" />
                              </div>

                              <SocialLogin />
                        </div>

                  </div>
            </div>
      );
};

export default Register;