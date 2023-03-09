const SecondContent = ({ img }) => {
  return (
    <div className="grid grid-rows-2 grid-cols-7 gap-x-5 relative">
      <figure className="absolute left-10 z-10">
        <img src={img.imgTen} alt="yellow background" />
      </figure>
      <figure className="absolute inset-y-[60%] inset-x-[10%] z-20">
        <img src={img.imgText} alt="brand name" />
      </figure>
      <div className="col-span-2 place-self-end self-end relative z-20">
        <p className="brand-right">Carhartt WIP</p>
        <img src={img.imgThree} alt="brand images" />
        <figure className="absolute -bottom-[4.5em] -right-[8rem]">
          <img src={img.imgNine} alt="grafitti" />
        </figure>
      </div>
      <div className="z-20 relative">
        <p className="brand-right">Converse</p>
        <img src={img.imgFive} alt="brand images" />
      </div>
      <div className="self-center z-20 relative">
        <p className="brand-left">Vans</p>
        <img src={img.imgTwo} alt="brand images" />
      </div>
      <div className="grid grid-rows-2 gap-y-7 relative">
        <div className="self-end">
          <figure className="absolute md:-top-9 lg:-top-[3.7rem]">
            <img src={img.imgEight} alt="graffiti" />
          </figure>
          <img src={img.imgSeven} alt="brand images" />
          <p className="brand-left-2">Veja</p>
        </div>
        <div className="z-20 relative">
          <p className="brand-left">Nike</p>
          <img src={img.imgSix} alt="brand images" />
        </div>
      </div>
      <div className="row-span-2 col-span-2 z-20">
        <div className="grid items-end gap-y-8">
          <figure className="relative">
            <p className="brand-right-2">Stüssy</p>
            <img src={img.imgOne} alt="brand images" />
          </figure>
          <figure className="relative">
            <p className="brand-left">The North Face</p>
            <img src={img.imgFour} alt="brand images" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SecondContent;
