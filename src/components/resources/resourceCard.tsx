import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Analysis from "@/assets/Analysis.svg";

export const ResourceCard = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	return (
		<Card className="max-w-[270px] rounded-xl">
			<Image
				src={Analysis}
				alt="Card image"
				className="rounded-t-md w-full h-[130px] object-cover"
			/>
			<CardHeader className="p-4">
				<CardTitle className="text-lg text-foreground">
					{title}
				</CardTitle>
				<CardDescription className="text-foreground font-light text-xs">
					{description}
				</CardDescription>
			</CardHeader>
		</Card>
	);
};
