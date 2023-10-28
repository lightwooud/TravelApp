import Image from "next/image"

const Registro = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="pt-6  pl-10 space-y-4 md:space-y-6 sm:p-8 ">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        CREA UNA CUENTA
                    </h1>
                    <form className="space-y-4 md:space-y-6 justify-center items-center" action="#">
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label for="apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label for="nickName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label for="celu.ar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Celular</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                            <input type="text" />
                        </div>
                        <div className="flex items-start">
                            <div className="flex">
                                <input type="text" className="w-5 h-5"/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Crear cuenta</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Ya tienes una cuenta? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Inicia sesion</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Registro


