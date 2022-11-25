import styles from "../styles/Form.module.css";
import { useState } from "react";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import Link from "next/link";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useFormik } from "formik";
import loginValidate from "../lib/validate";
import { useRouter } from "next/router";

const Login = function () {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const onSubmit = async function (values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });

    console.log(status);

    if (status.ok) router.push(status.url);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // input validate
    validate: loginValidate,
    // form submit function
    onSubmit,
  });

  // Google Handler Function
  const handleGoogleSignin = async function () {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  // Facebook Handler Function
  const handleFacebookSignin = async function () {
    signIn("facebook", { callbackUrl: "http://localhost:3000" });
  };
  return (
    <main className="h-auto bg-gray-200 py-5">
      <div className="max-w-lg my-10 p-10 mx-auto bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Auto Check Engine</h1>
          <p className="text-gray-500 mt-2">
            Come here once and no need to go anywhere else.
          </p>
        </div>

        <div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-2 my-3 text-center"
          >
            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type="email"
                name="email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={23} />
              </span>
            </div>
            {formik.errors.email && formik.touched.email ? (
              <span className="text-sm text-red-500">
                {formik.errors.email}
              </span>
            ) : (
              <></>
            )}

            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              <span
                onClick={() => setShow(!show)}
                className="icon flex items-center px-4 "
              >
                <HiFingerPrint size={23} />
              </span>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <span className="text-sm text-red-500">
                {formik.errors.password}
              </span>
            ) : (
              <></>
            )}

            {/* Login Buttons */}
            <div className="input-button">
              <button className={styles.button} type="submit">
                Login
              </button>
            </div>
            <div className="input-button">
              <button
                onClick={handleGoogleSignin}
                className={styles.button_custom}
                type="button"
              >
                <BsGoogle size={23} />
                Sign In Google
              </button>
            </div>
            <div className="input-button">
              <button
                onClick={handleFacebookSignin}
                className={styles.button_custom}
                type="button"
              >
                <BsFacebook size={23} />
                Sign In Facebook
              </button>
            </div>
          </form>
          <p className="text-center text-gray-400">
            Don&apos;t have an account yet?&nbsp;
            <Link href={"/register"} className="text-black  underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/SNKRS",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
