type Props = { name: string; plain?: boolean };

export default function ServiceIcon({ name, plain = false }: Props) {
	const icon = getIcon(name);
	if (plain) {
		return <>{icon}</>;
	}
	return (
		<div className="h-10 w-10 grid place-items-center rounded-md border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[color:var(--color-brand)]">
			{icon}
		</div>
	);
}

function getIcon(name: string) {
	switch (name) {
		case "Criminal Law":
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
			);
		case "Commercial Law":
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
			);
		case "Immigration & Nationality Law":
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8z"/><circle cx="12" cy="12" r="3"/></svg>
			);
		case "Property & Conveyancing":
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12l9-9 9 9"/><path d="M9 21V9h6v12"/></svg>
			);
		case "Wills & Probate":
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V4a2 2 0 0 1 2-2h9l5 5v12.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
			);
		case "Civil Litigation":
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2h4v7h-4z"/><path d="M2 9h20v13H2z"/></svg>
			);
		case "Family Law":
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4"/><circle cx="17" cy="7" r="4"/><path d="M2 22a7 7 0 0 1 14 0"/><path d="M8 22a7 7 0 0 1 14 0"/></svg>
			);
		case "Oil & Gas":
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 6 6 9 6 12a6 6 0 0 0 12 0c0-3-2-6-6-10z"/></svg>
			);
		default:
			return (
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>
			);
	}
}


