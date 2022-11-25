import DisplayCard from "../../../components/Display-Card";

const DDPAIDashcams = function ({ DDPAIDashcamsData }) {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <h1 className="my-10 mx-14 text-5xl font-bold">DDPAI Dashcams</h1>

        <section className="grid mx-14 gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20">
          <DisplayCard product={DDPAIDashcamsData} COBRA />
        </section>
      </main>
    </>
  );
};

export default DDPAIDashcams;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/Parts-and-Accessories/");
  const data = await res.json();

  const DDPAIDashcamsData = data.DashCams.DDPAIDashcams;
  return {
    props: {
      DDPAIDashcamsData,
    },
  };
}
