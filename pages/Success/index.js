import { BsCheck2Square } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Success = function () {
  const [countdown, setCountdown] = useState();
  const router = useRouter();

  const countdownTimer = function () {
    let timer = 6;

    const intervalId = window.setInterval(function () {
      timer--;
      setCountdown(timer);

      if (timer === 0) {
        clearInterval(intervalId);
        router.push("/");
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  }, []);

  return (
    <main className="max-w-2xl bg-gray-100 mx-auto my-20 rounded-lg px-5 py-10 drop-shadow-xl">
      <h1 className="text-4xl text-center text-green-500">
        Payment Successfull!
      </h1>
      <BsCheck2Square size={45} className="text-green-500 mx-auto my-5" />
      <p className="text-center my-10 text-xl">
        You will be redirect in Home Page in {countdown}
      </p>
    </main>
  );
};

export default Success;
