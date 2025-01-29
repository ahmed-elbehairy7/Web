import { Button, CenterSection } from "mafazaa-react-ui";
import React from "react";
import fundImage from "@/assets/front-view-plant-growing-from-golden-coins.jpg";

const description = `مفازا هو مشروع دعوي إسلامي يهدف إلى حجب المواقع الإباحية
 و توفير محتوى هادف للأطفال و غيرها الكثير من المنتجات إن شاء الله التي تخدم الإسلام و المسلمين`;

const FundPage = () => {
	return (
		<main>
			<section
				className={`py-24 min-h-screen w-full object-cover bg-no-repeat bg-cover bg-center 
      relative overflow-hidden flex items-center justify-center z-10 before:content-[''] bg-centerSectionBg
      before:absolute
      before:inset-0
      before:block
      before:bg-black
      before:opacity-65
      before:z-[-5]
      `}
				style={{
					color: "#f2f2f2",
					backgroundImage: `url(${fundImage.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="text-center lg:mt-16 py-8 flex flex-col gap-2 lg:gap-4 max-lg:px-4">
					<h1
						className={`text-lg sm:text-xl md:text-3xl lg:text-[64px] mb-0 lg:mb-8 font-bold`}
					>
						ادعم مفازا
					</h1>
					<h4
						className={`text-xs md:text-2xl font-normal md:font-bold lg:font-extrabold whitespace-pre-wrap mb-10`}
					>
						{description}
					</h4>
					<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 ">
						<Button
							{...{
								text: "ادعم",
							}}
						/>
					</div>
				</div>
			</section>
			<CenterSection
				{...{
					title: "ادعم مفازا",
					description: ``,
					backgroundImage: fundImage,
					buttons: [],
					textColor: "#f2f2f2",
				}}
			/>
		</main>
	);
};

export default FundPage;
