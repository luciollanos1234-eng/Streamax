import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { getRegisteredUsers, setCurrentUser } from "../services/storageService";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLogin = async (data: LoginFormData) => {
    const email = data.email.trim().toLowerCase();
    const user = getRegisteredUsers().find(
      (registeredUser) =>
        registeredUser.email.toLowerCase() === email &&
        registeredUser.password === data.password,
    );

    if (!user) {
      await Swal.fire({
        title: "Credenciales inválidas",
        text: "Verificá tu correo y contraseña.",
        icon: "error",
      });
      return;
    }

    setCurrentUser(user);

    await Swal.fire({
      title: "¡Bienvenido!",
      text: `Hola ${user.name}, te logueaste correctamente.`,
      icon: "success",
    });

    navigate("/");
  };

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[#0f172a] px-4 py-10 text-white">
      <div className="w-full max-w-md rounded-2xl border border-gray-700 bg-[#111827] p-8 shadow-xl">
        <div className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-400">Streamax</p>
          <h1 className="mt-2 text-3xl font-bold">Iniciar sesión</h1>
          <p className="mt-2 text-sm text-gray-300">
            Accedé a tu cuenta para continuar con tu experiencia.
          </p>
        </div>

        <form noValidate onSubmit={handleSubmit(onLogin)} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-200">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="nombre@gmail.com"
              className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white outline-none placeholder:text-gray-400 focus:border-amber-400"
              {...register("email", {
                required: "El correo electrónico es obligatorio.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Ingresá un correo válido.",
                },
              })}
            />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-200">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="Tu contraseña"
              className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white outline-none placeholder:text-gray-400 focus:border-amber-400"
              {...register("password", {
                required: "La contraseña es obligatoria.",
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-amber-500 px-4 py-2 font-semibold text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Ingresando..." : "Ingresar"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-300">
          ¿No tenés cuenta?{" "}
          <NavLink to="/Register" className="font-semibold text-amber-400 hover:text-amber-300">
            Registrate
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default Login;
