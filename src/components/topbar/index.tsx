import Image from "next/image";
import SearchInput from "./searchInput";
import Bell from "@/assets/bell.svg";
import Avatar from "@/assets/avatar.svg";

export const TopBar = () => {
	return (
		<div className="h-[72px] border-b border-gray-200 bg-white px-10 py-4 flex items-center">
			<div className="ml-auto flex gap-[100px] items-center">
				<div className="w-[320px]">
					<SearchInput />
				</div>
				<div className="flex gap-10 items-center">
					<Image src={Bell} alt="" />
					<Image src={Avatar} alt="" />
				</div>
			</div>
		</div>
	);
};
