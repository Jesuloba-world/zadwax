import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchInput() {
	return (
		<div className="relative">
			<Input
				id="searchinput"
				className="peer ps-9 h-10"
				placeholder="Search"
				type="text"
			/>
			<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
				<Search size={16} strokeWidth={2} aria-hidden="true" />
			</div>
		</div>
	);
}
