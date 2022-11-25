import { useState } from "react";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import styles from "../styles/Form.module.css";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { useFormik } from "formik";
import { registerValidate } from "../lib/validate";
import { useRouter } from "next/router";

const Register = function () {
  const [show, setShow] = useState({
    password: false,
    cpassword: false,
  });

  const router = useRouter();

  const onSubmit = async function (values) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    await fetch("http://localhost:3000/api/auth/signup/", options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push("http://localhost:3000/login");
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    // input validate
    validate: registerValidate,
    // form submit function
    onSubmit,
  });

  return (
    <main className="h-auto bg-gray-200 py-5">
      <div className="max-w-lg my-10 p-10 mx-auto bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sneaker Street</h1>
          <p className="text-gray-500 mt-2">
            When the shoes get lighter, the moves get tighter.
          </p>
        </div>

        <div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-5 my-3"
          >
            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type="text"
                name="username"
                placeholder="Username"
                {...formik.getFieldProps("username")}
              />
              <span className="icon flex items-center px-4">
                <HiOutlineUser size={23} />
              </span>
            </div>
            {formik.errors.username && formik.touched.username ? (
              <span className="text-sm text-red-500">
                {formik.errors.username}
              </span>
            ) : (
              <></>
            )}
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
                type={`${show.password ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              <span
                onClick={() => setShow({ ...show, password: !show.password })}
                className="icon flex items-center px-4"
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

            <div className={styles.input_group}>
              <input
                className={styles.input_text}
                type={`${show.cpassword ? "text" : "password"}`}
                name="cpassword"
                placeholder="Confirm Password"
                {...formik.getFieldProps("cpassword")}
              />
              <span
                onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
                className="icon flex items-center px-4"
              >
                <HiFingerPrint size={23} />
              </span>
            </div>
            {formik.errors.cpassword && formik.touched.cpassword ? (
              <span className="text-sm text-red-500">
                {formik.errors.cpassword}
              </span>
            ) : (
              <></>
            )}

            {/* Login Buttons */}
            <div className="input-button">
              <button className={styles.button} type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center text-gray-400">
            Have an account?&nbsp;
            <Link href={"/login"} className="text-black underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;

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
