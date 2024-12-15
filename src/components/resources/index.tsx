import { ResourceCard } from "./resourceCard";

export const Resources = () => {
	return (
		<div className="space-y-6">
			<p className="text-xl font-bold text-gray-950">Resources for you</p>
			<div className="flex gap-6 flex-wrap">
				<ResourceCard
					title="Academic literature review"
					description="Organize your sources and synthesize information effectively."
				/>
				<ResourceCard
					title="Data analysis templates"
					description="Streamline patient data collection and analysis for medical research."
				/>
				<ResourceCard
					title="UX Heuristic template."
					description="Assess your interface against established usability principles."
				/>
				<ResourceCard
					title="Affinity mapping template"
					description="Assess your interface against established usability principles."
				/>
			</div>
		</div>
	);
};
