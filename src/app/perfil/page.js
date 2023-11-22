import Navbar from "../components/navbar/Navbar"
import Perfil from "../components/perfil/Perfil"

const page = () => {

  return (
    <div className="flex  flex-col items-center justify-between ">
      <Navbar />
      <Perfil />
    </div>
  )
}

export default page