const StepPage = () => {
    const steps = [
      {
        number: "1",
        title: "Open your account",
        description: "Sign up to Finpay and set up your account from the dashboard.",
      },
      {
        number: "2",
        title: "Transfer your money",
        description: "Move money from another account into Finpay and start earning.",
      },
      {
        number: "3",
        title: "Watch your balance grow",
        description: "Accessed instantly and remain insulated from market volatility.",
      },
    ];
  
    return (
      <div className="w-full h-[60vh] bg-finpayDarkTeal p-10 md:p-20">
        <span className="uppercase text-finpayBlue text-xs font-semibold">Step</span>
        <h2 className="text-white text-3xl font-semibold w-full md:w-[50%]">
          Maximize your returns with a Reserve account that generates.
        </h2>
        <div className="flex flex-wrap justify-between mt-10 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 w-full md:w-[30%] bg-finpayDeepTeal p-6 rounded-xl"
            >
              <h3 className="text-7xl font-bold bg-gradient-to-b from-[#A9C1CC] to-[#013347] text-transparent bg-clip-text">
                {step.number}
              </h3>
              <div className="mt-[-37px] pt-4 bg-finpayDeepTeal ">
                <h3 className="text-white font-medium">{step.title}</h3>
                <p className="font-medium text-xs text-[#A9C1CC] mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default StepPage;
  