import FormProfil from './formProfil'

const Profil = () => {
  return (
    <div>
      <div className="flex flex-col w-screen justify-center items-center gap-6">
        <h1 className="text-3xl mt-10 text-center">Modifier votre profil</h1>
        <FormProfil />
      </div>
    </div>
  )
}

export default Profil
