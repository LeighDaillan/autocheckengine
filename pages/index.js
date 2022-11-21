import Image from "next/image";
import engineImg from "../public/carEngine.jpg";
import FeaturedCard from "../components/Featured-Card";

export default function Home({ TiresData, MaintenanceData }) {
  return (
    <main className="pb-10">
      {/* display section */}
      <section className="grid grid-cols-2 py-10 px-20 bg-gray-100 ">
        <div className="justify-self-center self-center px-10">
          <h1 className="text-5xl font-bold mb-3">Auto Check Engine</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequ
            voluptatum laborum numquam blanditiis harum quisquam.
          </p>
        </div>
        <div className="max-w-xl bg-white rounded-xl">
          <Image
            src={engineImg}
            className="rounded-t-xl"
            alt="Car Engine"
            priority
          />
          <div className="p-5">
            <h2 className="text-xl font-bold">What is a Car Engine?</h2>
            <p>
              It is a complex machine built to convert heat from burning gas
              into the force that turns the road wheels. The chain of reactions
              which achieve that objective is set in motion by a spark , which
              ignites a mixture of petrol vapour and compressed air inside a
              momentarily sealed cylinder and causes it to burn rapidly.
            </p>
          </div>
        </div>
      </section>

      {/* Tires Feature */}
      <section className="mt-10  max-w-7xl mx-auto px-10 py-5">
        <h1 className="text-4xl mb-7">Featured Bridgestone Tires</h1>
        {/* Card */}
        <div className="grid grid-cols-4 gap-5">
          <FeaturedCard product={TiresData.Bridgestone} />
        </div>
        {/* View All */}
        <div className="flex">
          <button className="mx-auto my-5 border border-gray-600 px-6 py-2 text-base text-gray-600 hover:border-2 hover:border-black hover:text-black">
            View All
          </button>
        </div>
      </section>

      {/* Maintenance Feature */}
      <section className="mt-10  max-w-7xl mx-auto px-10 py-5">
        <h1 className="text-4xl mb-7">Featured Additives</h1>
        {/* Card */}
        <div className="grid grid-cols-4 gap-5">
          <FeaturedCard product={MaintenanceData.Engine.Additive} />
        </div>
        {/* View All */}
        <div className="flex">
          <button className="mx-auto my-5 border border-gray-600 px-6 py-2 text-base text-gray-600 hover:border-2 hover:border-black hover:text-black">
            View All
          </button>
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  const tiresRes = await fetch("http://localhost:4000/Tires");
  const TiresData = await tiresRes.json();

  const maintenanceRes = await fetch("http://localhost:4000/Maintenance");
  const MaintenanceData = await maintenanceRes.json();

  return {
    props: {
      TiresData,
      MaintenanceData,
    },
  };
}
