import DisplayCard from "../../../components/Display-Card";

const CARMATELight = function ({ CARMATELightData }) {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <h1 className="my-10 text-5xl font-bold">CARMATE Lights</h1>

        <section className="grid gap-5 grid-cols-4 mb-20">
          <DisplayCard product={CARMATELightData} />
        </section>
      </main>
    </>
  );
};

export default CARMATELight;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/Parts-and-Accessories/");
  const data = await res.json();

  const CARMATELightData = data.CarLights.CARMATELight;
  return {
    props: {
      CARMATELightData,
    },
  };
}
