import { useContext } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import Image from "next/image";
import { useSession, signOut, getSession } from "next-auth/react";
import { CheckoutContext } from "../../components/CheckoutContextProvider";

const Account = function () {
  const { user } = useContext(CheckoutContext);
  return (
    <main className="bg-gray-200 h-screen py-20">
      <section className="bg-white rounded-lg max-w-xl mx-auto drop-shadow-2xl py-4 px-10">
        <p className="text-xl">You are signed in as</p>
        <div className="flex p-3 my-5">
          {!user.user.image ? (
            <BsFillPersonFill size={30} />
          ) : (
            <Image
              src={user?.user.image}
              width="50"
              height="50"
              alt="User Profile"
              className="rounded-full w-auto h-auto"
            />
          )}
          <div className="self-center ml-2">
            <h5 className="text-lg font-bold">{user?.user.name}</h5>
            <span>{user?.user.email}</span>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
          className="px-3 py-1 rounded-full bg-black text-white text-lg mx-auto flex"
        >
          Sign Out
        </button>
      </section>
    </main>
  );
};

export default Account;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
