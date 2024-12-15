import { Button } from "../ui/button";
import Image from "next/image";
import ZLogo from "@/assets/z-logo.svg";
import Clock from "@/assets/clock.svg";
import Star from "@/assets/star.svg";
import Home from "@/assets/home.svg";
import Folder from "@/assets/folder.svg";
import Cog from "@/assets/cog.svg";
import Info from "@/assets/info.svg";

export const Sidebar = () => {
	return (
		<div className="sticky top-0 h-screen w-[240px] px-3 pt-4 pb-[30px] border-r border-gray-200 bg-white flex flex-col justify-between">
			<div className="space-y-6">
				<div className="h-10 px-4 flex gap-2 items-center">
					<Image src={ZLogo} alt="logo" />
					<p className="text-xl font-bold text-[#201E1E]">Zadwax</p>
				</div>
				<div>
					<div>
						<Button
							className="bg-primary-50 w-full text-primary-700 justify-start gap-4 shadow-none"
							size={"lg-small-sides"}
						>
							<Image src={Home} alt="" /> Home
						</Button>
						<Button
							className="bg-white w-full text-foreground justify-start gap-4 shadow-none"
							size={"lg-small-sides"}
						>
							<Image src={Clock} alt="" /> Recent
						</Button>
						<Button
							className="bg-white w-full text-foreground justify-start gap-4 shadow-none"
							size={"lg-small-sides"}
						>
							<Image src={Star} alt="" /> Starred
						</Button>
					</div>
					<div className="bg-gray-200 w-full h-px my-3" />
					<div>
						<Button
							className="bg-white w-full text-foreground justify-start gap-4 shadow-none"
							size={"lg-small-sides"}
						>
							<Image src={Folder} alt="" /> Project
						</Button>
					</div>
				</div>
			</div>
			<div>
				<Button
					className="bg-white w-full text-foreground justify-start gap-4 shadow-none"
					size={"lg-small-sides"}
				>
					<Image src={Info} alt="" /> Support
				</Button>
				<Button
					className="bg-white w-full text-foreground justify-start gap-4 shadow-none"
					size={"lg-small-sides"}
				>
					<Image src={Cog} alt="" /> Settings
				</Button>
			</div>
		</div>
	);
};
