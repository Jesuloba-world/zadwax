import Image from "next/image";
import LinkedIn from "@/assets/linkedIn.png";
import Figma from "@/assets/figma.png";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export const Apps = () => {
	return (
		<div className="sticky top-0 h-screen bg-primary-600 w-[68px] p-4 flex flex-col gap-4">
			<div className="py-0.5">
				<Image src={LinkedIn} alt="" />
			</div>
			<div className="py-0.5">
				<Image src={Figma} alt="" />
			</div>
			<div className="py-0.5">
				<Image src={Figma} alt="" />
			</div>
			<div className="py-0.5">
				<Button
					size={"icon"}
					className="bg-white text-gray-950 h-9 w-9 rounded-lg"
				>
					<Plus className="w-5 h-5" />
				</Button>
			</div>
		</div>
	);
};
