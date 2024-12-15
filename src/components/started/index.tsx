import { Button } from "../ui/button";

export const Started = () => {
	return (
		<div className="rounded-xl border border-gray-200 p-4 flex flex-col gap-4 bg-white">
			<div className="pb-3 border-b border-gray-200 flex items-center justify-between">
				<div className="">
					<p className="text-xl font-bold text-gray-950">
						Getting Started
					</p>
					<p className="text-sm">
						Three simple steps to launch your first project
					</p>
				</div>
				<Button>Create project</Button>
			</div>
			<div className="space-y-1">
				<p className="">Step 1: Create your project</p>
				<p className="text-sm font-light">
					Give your project a name, add a description and your goals.
				</p>
			</div>
			<div className="space-y-1">
				<p className="">Step 2: Invite your teammates</p>
				<p className="text-sm font-light">
					Research is better together, Invite your colleagues.
				</p>
			</div>
			<div className="space-y-1">
				<p className="">Step 3: Setup your research process</p>
				<p className="text-sm font-light">
					Add the processes that are specific to this project.
				</p>
			</div>
		</div>
	);
};
