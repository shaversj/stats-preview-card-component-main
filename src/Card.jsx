import mobileImage from './assets/images/image-header-mobile.jpg'
import desktopImage from './assets/images/image-header-desktop.jpg'

const Card = () => {
    return (
        <div
            className={"w-[325px] lg:w-[1108px] lg:grid lg:grid-cols-[51%_49%] lg:h-[448px] bg-dark-desaturated-blue rounded-lg lg:rounded-l-lg lg:rounded-tr-none"}>
            <div
                className={"bg-hard-violet rounded-t-lg lg:col-start-2 lg:col-end-2 lg:rounded-r-lg lg:rounded-tl-none"}>
                <img className={"rounded-t-lg opacity-60 lg:hidden"} src={mobileImage} alt={"mobile image"} title={"Mobile Image"}/>
                <img className={"hidden lg:block rounded-r-lg opacity-60 w-full max-h-[448px] object-cover"}
                     src={desktopImage} alt={"desktop image"} title={"Header Image"}/>
            </div>

            <div className={"lg:col-start-1 lg:col-end-1 lg:row-start-1 lg:pl-12  lg:pr-20"}>
                <h1 className={"text-center font-Inter text-white font-semibold text-[28px] px-6 leading-8 pt-10 pb-5 lg:text-4xl lg:text-left lg:pt-[68px] lg:pb-7 lg:leading-[46px]"}>Get <span
                    className={"text-soft-violet"}>insights</span> that help your business grow.</h1>
                <p className={"text-center font-Inter text-Slightly-transparent-white font-extralight text-[15.7px] leading-6 px-6 pb-7 lg:text-left lg:pb-16"}>Discover
                    the benefits of data analytics and make better
                    decisions regarding revenue, customer experience, and overall efficiency.</p>
                <div
                    className={"flex flex-col items-center justify-center lg:flex-row lg:gap-x-16 lg:justify-start lg:pl-6 lg:pb-8"}>
                    <div>
                        <h1 className={"text-center font-Inter text-white font-semibold text-[24px] lg:text-left"}>10k+</h1>
                        <p className={"font-Lexand text-More-Slightly-transparent-white tracking-[0.05rem] text-[13px] font-extralight pb-7"}>COMPANIES</p>
                    </div>
                    <div>
                        <h1 className={"text-center font-Inter text-white font-semibold text-[24px] lg:text-left"}>314</h1>
                        <p className={"font-Lexand text-More-Slightly-transparent-white tracking-[0.05rem] text-[13px] font-extralight pb-7"}>TEMPLATES</p>
                    </div>
                    <div>
                        <h1 className={"text-center font-Inter text-white font-semibold text-[24px] lg:text-left"}>12M+</h1>
                        <p className={"font-Lexand text-More-Slightly-transparent-white tracking-[0.05rem] text-[13px] font-extralight pb-8"}>QUERIES</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;