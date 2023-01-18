import React from "react";
import Head from "next/head";
import Image from "next/image";
import foto from "../public/img/login.jpg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
    <Head>
      <title>Login de usuarios</title>
    </Head>
      <main>
        <section className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen">
          {/* Foto  */}
          <div className="relative h-[25rem] hidden lg:block lg:order-2 lg:h-full">
            <Image
              src={foto}
              alt=""
              placeholder="blur"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* login data  */}
          <div className="flex flex-col items-center justify-center w-[90%] mx-auto max-w-xl lg:order-1 ">
            <p className="font-bold text-6xl mb-5">Bienvenido</p>

            <div className="w-full flex flex-col gap-9 lg:gap-6 2xl:gap-9">
              {/* Google btn  */}
              <button className="relative flex items-center justify-center border border-slate-400 w-full py-4 text-lg transition-colors hover:bg-black hover:text-white hover:border-none">
                <FcGoogle className="text-4xl absolute top-[50%] left-1 -translate-y-[50%]" />
                Iniciar sesión con Google
              </button>

              {/* O con email  */}
              <div className="flex gap-4 items-center">
                <div className="w-full h-[1px] bg-slate-500"></div>
                <p className="text-sm w-full text-center uppercase text-slate-500 tracking-widest ">
                  o con email
                </p>
                <div className="w-full h-[1px] bg-slate-500"></div>
              </div>

              {/* Forms  */}
              <div className="flex flex-col gap-8">
                <form action="" className="flex flex-col gap-3">
                  <input
                    className="border border-slate-400 py-4 pl-2"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <input
                    className="border border-slate-400 py-4 pl-2"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                  />

                  {/* Ckeckbox / Olvidé contraseña */}
                  <div className="flex justify-between items-center my-2">
                    {/* Checkbox  */}
                    <div className="flex items-center gap-1">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Recúerdame</label>
                    </div>

                    {/* Olvidé contraseñá  */}
                    <p className="text-slate-500 underline cursor-pointer">
                      Olvidé mi contraseña
                    </p>
                  </div>

                  {/* Submit btn  */}
                  <button
                    type="submit"
                    className="bg-black text-white py-5 text-lg"
                  >
                    Iniciar sesión
                  </button>
                </form>

                <div className="w-full h-[1px] bg-slate-400"></div>

                <p className="text-center text-slate-500">
                  No tienes una cuenta?{" "}
                  <span className="underline cursor-pointer">Registrate</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
