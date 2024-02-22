import kotaWhite from "../assets/kotaWhite.svg"

const Footer = () => {
  return (
    
    <footer >
      <div>
        <div className="bg-custom-brown text-white p-4 h-20 flex justify-between"> 
            <img src={kotaWhite} alt="logo" />
            <p className="text-white underline">fdfsf</p>
             
        </div>
      </div>

      <div className=" h-9 bg-custom-red text-center pt-2">
        <h4 className="text-white">desarrollado por Grupo 20 Creations</h4>
      </div>
    </footer>
  );
};

export default Footer;
