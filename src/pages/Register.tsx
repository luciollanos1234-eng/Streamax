import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { getRegisteredUsers, saveRegisteredUsers } from "../services/storageService";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onRegister = async (data: RegisterFormData) => {
    const email = data.email.trim().toLowerCase();
    const alreadyRegistered = getRegisteredUsers().some(
      (user) => user.email.toLowerCase() === email,
    );

    if (alreadyRegistered) {
      await Swal.fire({
        title: "Correo ya registrado",
        text: "Probá iniciar sesión con ese correo.",
        icon: "error",
      });
      return;
    }

    const users = getRegisteredUsers();
    users.push({
      id: crypto.randomUUID(),
      name: data.name.trim(),
      email,
      password: data.password,
    });

    saveRegisteredUsers(users);

    await Swal.fire({
      title: "Cuenta creada",
      text: "Tus datos se guardaron en el navegador.",
      icon: "success",
    });

    navigate("/Login");
  };

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-[#0f172a] px-4 py-10 text-white">
      <div className="w-full max-w-md rounded-2xl border border-gray-700 bg-[#111827] p-8 shadow-xl">
        <div className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-400">Streamax</p>
          <h1 className="mt-2 text-3xl font-bold">Crear cuenta</h1>
          <p className="mt-2 text-sm text-gray-300">
            Registrate para disfrutar del catálogo premium.
          </p>
        </div>

        <form noValidate onSubmit={handleSubmit(onRegister)} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-200">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              placeholder="Tu nombre"
              className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white outline-none ring-0 placeholder:text-gray-400 focus:border-amber-400"
              {...register("name", {
                required: "El nombre es obligatorio.",
                minLength: {
                  value: 2,
                  message: "El nombre debe tener al menos 2 caracteres.",
                },
              })}
            />
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
          </div>

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
                  message: "Ingresá un correo electrónico válido.",
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
              autoComplete="new-password"
              placeholder="Al menos 6 caracteres"
              className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white outline-none placeholder:text-gray-400 focus:border-amber-400"
              {...register("password", {
                required: "La contraseña es obligatoria.",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres.",
                },
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-1 block text-sm font-medium text-gray-200">
              Confirmar contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              placeholder="Repetí tu contraseña"
              className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white outline-none placeholder:text-gray-400 focus:border-amber-400"
              {...register("confirmPassword", {
                required: "Confirmar la contraseña es obligatorio.",
                validate: (value) =>
                  value === watch("password") || "Las contraseñas no coinciden.",
              })}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-400">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-amber-500 px-4 py-2 font-semibold text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Creando cuenta..." : "Registrarme"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-300">
          ¿Ya tenés cuenta?{" "}
          <NavLink to="/Login" className="font-semibold text-amber-400 hover:text-amber-300">
            Iniciar sesión
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default Register;
