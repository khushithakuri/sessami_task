const Location = (props) => {
    const { name, country, thumbnail, description, ...otherProps } = props;
  
    return (
      <div
        className="h-56 lg:h-64
                  w-full md:w-1/2
                  p-2 lg:p-4 cursor-pointer"
        {...otherProps}
      >
        <div
          className="w-full h-full rounded-2xl
                      flex flex-row justify-center
                      shadow-md shadow-slate-400
                      hover:shadow-slate-300 hover:shadow-xl
                      transition-shadow bg-white overflow-hidden"
        >
          <div className="h-full w-[180%] md:w-[150%] max-w-[130px] lg:w-[130%] lg:max-w-[175px]">
            <img className="w-full h-full object-cover" src={thumbnail} alt={name + "-" + country} />
          </div>
          <div className="flex flex-col justify-between py-2 px-3 md:py-3 md:px-5">
            <div>
              <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">{name}</h1>
              <h3 className="font-medium text-zinc-600 text-sm md:text-sm lg:text-xl">{country}</h3>
            </div>
            <p
              className="font-medium
              text-sm md:text-sm lg:text-xl
              lg:leading-tight"
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Location;
  