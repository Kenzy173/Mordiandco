import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ArrowLink({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-semibold text-[color:var(--color-foreground)] hover:opacity-90 transition-[opacity,transform] duration-150 ${className}`}
    >
      <span>{children}</span>
      <svg
        aria-hidden
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-150 group-hover:translate-x-0.5"
      >
        <path d="M5 12h14" />
        <path d="M13 5l7 7-7 7" />
      </svg>
    </Link>
  );
}


