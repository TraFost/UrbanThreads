import UrbanLogo from "../../assets/urban-logo.svg";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center lg:h-screen">
        <figure className="w-2/3 md:w-1/4">
          <img src={UrbanLogo} alt="Urban Threads Logo" />
        </figure>
        <p className="text-2xl">Built With:</p>
        <ul className="flex flex-col md:flex-row justify-center items-center gap-14 md:gap-10 pt-6 pb-5 lg:pb-0">
          <li className="w-1/2 md:w-1/12">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="react-logo"
            />
          </li>
          <li className="w-1/2 md:w-1/12">
            <img
              src="https://manggaleh-shop.netlify.app/static/media/redux.b426d97de12d4dab1c06.png"
              alt="redux-logo"
            />
          </li>
          <li className="w-1/2 md:w-1/12">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
              alt="tailwind"
            />
          </li>
          <li className="w-1/2 md:w-1/12">
            <img
              src="https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg"
              alt="daisy-ui"
            />
          </li>
          <li className="w-1/2 md:w-1/12">
            <img
              src="https://seeklogo.com/images/P/pocketbase-logo-CA73994F09-seeklogo.com.png"
              alt="daisy-ui"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
