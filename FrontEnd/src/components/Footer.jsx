import kotaWhite from "../assets/kotaWhite.svg"

const Footer = () => {
  return (
    
    <footer >
      <div>
        <div className="bg-custom-brown text-white p-4 h-28 flex justify-between"> 
            <img src={kotaWhite} alt="logo" className="ml-14"/>
            <div className=" mr-14">
              <p className="text-white underline p-1 text-xl">politica de privacidad</p>
              <p className="text-white underline p-1 text-xl">aviso legal</p>
            </div>
             
        </div>
      </div>

      <div className=" h-9 bg-custom-red text-center pt-2">
        <h4 className="text-white">desarrollado por Grupo 20 Creations</h4>
      </div>
    </footer>
  );
};

export default Footer;
