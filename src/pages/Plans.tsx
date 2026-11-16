import { NavLink } from "react-router";
import { plans } from "../data/plans";

const Plans = () => (
  <section className="min-h-[70vh] bg-[#0f172a] px-4 py-12 text-white">
    <div className="mx-auto max-w-6xl">
      <header className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
          Streamax
        </p>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">
          Elegí tu suscripción
        </h1>
        <p className="mt-3 text-gray-300">
          Compará los planes y elegí el que mejor se adapte a vos.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className="flex flex-col rounded-2xl border border-gray-700 bg-[#111827] p-6 shadow-xl"
          >
            <h2 className="text-xl font-bold">{plan.name}</h2>
            <p className="mt-3 text-3xl font-bold text-amber-400">
              {plan.price}
            </p>
            <p className="mt-3 min-h-12 text-sm text-gray-300">
              {plan.description}
            </p>
            <ul className="my-6 flex-1 space-y-2 text-sm text-gray-200">
              {plan.benefits.map((benefit) => (
                <li key={benefit}>✓ {benefit}</li>
              ))}
            </ul>
            <NavLink
              to={`/Register?plan=${plan.id}`}
              className="rounded-md bg-amber-500 px-4 py-2 text-center font-semibold text-black transition hover:bg-amber-400"
            >
              Elegir plan
            </NavLink>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Plans;
