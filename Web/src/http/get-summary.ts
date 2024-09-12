interface SummaryResponse {
	completed: number;
	total: number;
	goalsPerDay: Record<
		string,
		{
			id: string;
			title: string;
			createdAt: string;
		}[]
	>;
}

export const getSummary = async (): Promise<SummaryResponse> => {
	const res = await fetch("http://localhost:3333/summary");
	const data = await res.json();
	return data.summary;
};
