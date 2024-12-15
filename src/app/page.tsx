import { Apps } from "@/components/apps";
import { Resources } from "@/components/resources";
import { Sidebar } from "@/components/sidebar";
import { Started } from "@/components/started";
import { Tips } from "@/components/tips";
import { TopBar } from "@/components/topbar";
import { Welcome } from "@/components/welcome";

export default function Home() {
	return (
		<div className="flex relative">
			<Apps />
			<Sidebar />
			<div className="flex-1 flex flex-col">
				<TopBar />
				<div className="pt-6 pr-10 pl-8 pb-[100px] space-y-10">
					<Welcome />
					<div className="grid grid-cols-[1.2fr_1fr] gap-x-6">
						<Started />
						<Tips />
					</div>
					<Resources />
				</div>
			</div>
		</div>
	);
}
