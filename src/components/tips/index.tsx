export const Tips = () => {
	return (
		<div className="rounded-xl border border-gray-200 p-4 flex flex-col gap-4 bg-white">
			<div className="pb-3 border-b border-gray-200 flex items-center justify-between">
				<div className="">
					<p className="text-xl font-bold text-gray-950">
						Research Tips and Tricks
					</p>
					<p className="text-sm">
						Three simple steps to launch your first project
					</p>
				</div>
			</div>
			<div className="space-y-1">
				<p className="">Don’t start from scratch, use a template</p>
				<p className="text-sm font-light">
					Begin with field-tested frameworks adaptable to your
					research.
				</p>
			</div>
			<div className="space-y-1">
				<p className="">Add steps and set milestones</p>
				<p className="text-sm font-light">
					Define key stages and monitor progress from hypothesis to
					conclusion.
				</p>
			</div>
			<div className="space-y-1">
				<p className="">Track changes in your documents over time.</p>
				<p className="text-sm font-light">
					Capture every revision to ensure data integrity and
					transparency.
				</p>
			</div>
		</div>
	);
};
