import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <div className="px-[8.3rem] pt-[2.7rem] bg-[#2E5834]  text-white">
      <div className="border-b-1 border-white flex pb-[4.4rem]">
        <div className="flex gap-x-[8.8rem] mr-[10rem]">
          <SubFooter
            subTitle1="Recipes"
            subTitle2="Articles"
            subTitle3="Careers"
            subTitle4="About Us"
            subTitle5="Contact Us"
            title="LINKS"
          />
          <SubFooter
            subTitle1="Terms of Service"
            subTitle2="Privacy Policy"
            subTitle3="FAQs"
            title="Legal & Support"
          />
        </div>
        <div className="flex gap-x-[13rem]">
          <div className="w-[10.9rem]">
            <p className="text-[1.2rem] font-semibold mb-6">Download The App</p>
            <div className="flex flex-col gap-y-5">
              <img src="/GooglePlay.svg" alt="" className="cursor-pointer" />
              <img src="/AppStore.svg" alt="" className="cursor-pointer" />
            </div>
          </div>
          <div className="w-[20rem]">
            <p className="font-semibold text-[1.6rem]">
              Sign up for our Newsletter
            </p>
            <p className="mb-4">
              Subscribe & start receiving your weekly dose of delicious
              inspiration!
            </p>
            <div
              className="flex items-center justify-between bg-white h-[3.3rem] w-[2
				6.3rem] pl-[1.6rem] rounded-[2.6rem] "
            >
              <input
                type="text"
                placeholder="name@domain.com"
                className="placeholder-[#ACACAC] outline-0 text-black"
              />
              <p className="bg-[#2E5834] px-[1rem] py-[.83rem] mr- rounded-br-[2.6rem] rounded-tr-[2.6rem] mr-0.5 cursor-pointer ">
                Subscribe
              </p>
            </div>
            <p className="mt-12">FOLLOW US</p>
            <div className="flex gap-x-5">
              <img src="/faceBook.svg" alt="" />
              <img src="/InstaLogo.svg" alt="" />
              <img src="/PintrestIcon.svg" alt="" />
              <img src="/YouTubeIcon.svg" alt="" />
              <img src="/xIcon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex
	  justify-center"
      >
        <p className="py-5 flex items-center gap-x-[0.3rem]">
          <span className="">
            <img src="/copyRight.svg" alt="" />
          </span>
          2023 Brand. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
