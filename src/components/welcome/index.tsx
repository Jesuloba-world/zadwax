import Image from "next/image";
import pattern1 from "@/assets/pattern1.svg";

export const Welcome = () => {
	return (
		<div className="space-y-6">
			<div className="flex flex-col gap-2">
				<h1 className="text-2xl font-bold text-gray-950">
					Welcome Susan,
				</h1>
				<p className="">
					Get ready to complete your research processes on Zadwax
				</p>
			</div>
			<div className="bg-primary-50 rounded-xl relative overflow-hidden">
				<Image
					src={pattern1}
					alt=""
					className="absolute bottom-0 right-0"
				/>
				<div className=" px-6 py-[38.5px] relative space-y-2">
					<p className="text-sm text-gray-900">
						Welcome to the cool kids club
					</p>
					<h2 className="text-2xl text-primary-700 max-w-[1000px]">
						The new way designers revolutionize their work. See how
						others are using Zadwax to accelerate their design
						process.
					</h2>
				</div>
			</div>
		</div>
	);
};
