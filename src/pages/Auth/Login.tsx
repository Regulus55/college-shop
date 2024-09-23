import { AuthImageContainer, Button, Input } from "components/ui";
import { EMAIL_REGEX } from "data/Auth/authData";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

interface IProps {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
    setError,
  } = useForm<IProps>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signWithGoogle = () => {};
  const signWithKakao = () => {};
  const signWithNaver = () => {};

  const submit = (data: IProps) => {
    console.log(data);
  };

  return (
      <section className="m-auto grid min-h-[calc(100vh-65px)] w-full grid-cols-10">
        <div className="col-span-10 flex h-full w-full grow flex-col items-center justify-center bg-white shadow-slate-50 drop-shadow-md lg:col-span-4">
          <div className="mb-14 flex-col items-center text-center">
            <h2 className="mb-2 text-3xl font-bold">Hello Again!</h2>
            <p className="text-slate-500">
              Welcome back! Please enter your detail.
            </p>
          </div>
          <div className="flex w-full flex-col items-center">
            <form
                className="flex w-full max-w-sm flex-col"
                onSubmit={handleSubmit((data) => submit(data))}
            >
              <Input
                  {...register("email", {
                    required: "Please provide an email",
                    pattern: {
                      value: EMAIL_REGEX,
                      message: "Please provide a properly formatted email address",
                    },
                  })}
                  error={errors.email?.message}
                  ariaInvalid={isDirty}
                  labelText="Email"
                  type="email"
                  className="mb-3"
                  autofocus
                  autocomplete="on"
              />

              <Input
                  {...register("password", {
                    required: "Please provide a password",
                    minLength: {
                      value: 6,
                      message: "Password needs to be between 6 to 20 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password needs to be between 6 to 20 characters",
                    },
                  })}
                  error={errors.password?.message}
                  ariaInvalid={isDirty}
                  labelText="Password"
                  type="password"
                  className="mb-10"
                  autocomplete="off"
              />

              <Button
                  text={"Login"}
                  disabled={isSubmitting} // 제출중일때 isSubmitting 을 true 로 바꿔서 선택못하게 함
                  className="rounded-lg bg-violet-500 py-4 font-semibold text-white hover:bg-violet-600"
              />
            </form>
            <Button
                text={"Sign with Google"}
                onClick={signWithGoogle}
                icon={() => <FcGoogle className={"mr-2 text-2xl"} />}
                className="mt-6 w-full max-w-sm rounded-lg border border-gray-300 bg-white py-4 font-semibold text-slate-500 hover:bg-gray-50"
            />
            <Button
                text={"Sign with Kakao"}
                onClick={signWithKakao}
                icon={() => (
                    <img src="/images/kakao.png" className="mr-2 w-7 h-7" />
                )}
                className="mt-1 w-full max-w-sm rounded-lg border border-gray-300 bg-white py-4 font-semibold text-slate-500 hover:bg-gray-50"
            />
            <Button
                text={"Sign with Naver"}
                onClick={signWithNaver}
                icon={() => (
                    <img src="/images/naver.png" className="mr-2 w-7 h-7" />
                )}
                className="mt-1 w-full max-w-sm rounded-lg border border-gray-300 bg-white py-4 font-semibold text-slate-500 hover:bg-gray-50"
            />
            <div className="mt-10 text-slate-500">
              Don't have an account?
              <Link to={"/signup"} className="p-2 font-semibold text-violet-500">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <AuthImageContainer
            image={"/images/bubble-gum-big-screen-phone.png"}
            firstText="shop smarter"
            secondText="Login here"
        />
      </section>
  );
};

export default Login;