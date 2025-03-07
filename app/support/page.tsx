import { Button, CenterSection } from "mafazaa-react-ui";
import React from "react";
import fundImage from "@/assets/front-view-plant-growing-from-golden-coins.jpg";

const description = `مفازا هو مشروع دعوي إسلامي يهدف إلى حجب المواقع الإباحية
 و توفير محتوى هادف للأطفال و غيرها الكثير من المنتجات إن شاء الله التي تخدم الإسلام و المسلمين
 تستطيع دعم المشروع عبر فودافون كاش على الرقم التالي:
 01003816322`;

const FundPage = () => {
	return (
		<main>
			<CenterSection
				{...{
					title: "ادعم مفازا",
					description,
					backgroundImage: fundImage,
					buttons: [],
					textColor: "#f2f2f2",
				}}
			/>
		</main>
	);
};

export default FundPage;
