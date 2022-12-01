import BasketCard from "../../components/Basket-Card";
import BasketCheckout from "../../components/Basket-Checkout";

const Basket = function () {
  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto bg-gray-100 my-20 px-10 py-5 gap-x-10">
        <section className="col-span-2">
          <h1 className="text-2xl font-bold border-b-2 border-gray-300 pb-2">
            Your Basket
          </h1>
        </section>
        <BasketCard />
        <section className="text-center">
          <BasketCheckout />
        </section>
      </main>
    </>
  );
};

export default Basket;
