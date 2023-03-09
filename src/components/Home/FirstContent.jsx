const FirstContent = ({ img }) => {
  return (
    <div className="grid grid-cols-4 mb-12">
      <div className="col-span-2 justify-self-end self-end">
        <img src={img.firstPict} alt="Urban Logo" />
      </div>
      <div className="grid col-span-2 justify-self-center">
        <img
          src={img.secondPict}
          alt="Streetwear"
          className="row-span-full col-span-full"
        />
        <img
          src={img.vectorOne}
          alt="grafitti"
          className="row-span-full col-span-full"
        />
      </div>
      <div className="self-center col-span-2">
        <p className="w-auto text-center pb-1">
          Urban fashion that makes a difference
        </p>
        <div className="border-b border-black"></div>
      </div>
      <div className="place-self-end row-span-2 col-span-2">
        <div className="grid place-items-start relative">
          <img
            src={img.vectorThree}
            alt="grafitti"
            className="absolute sm:-left-[0.50rem] md:-left-3 -top-3"
          />
          <img
            src={img.thirdPict}
            alt="Streetwear"
            className="col-span-full row-span-full"
          />
          <img
            src={img.graffiti}
            alt="graffiti"
            className="col-span-full row-span-full place-self-end"
          />
        </div>
      </div>
      <div className="col-span-2 lg:ml-24">
        <div className="grid place-items-center">
          <img
            src={img.fourthPict}
            alt="Streetwear"
            className="row-span-full col-span-full"
          />
          <img
            src={img.vectorFour}
            alt="grafitti"
            className="row-span-full col-span-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstContent;
