import Link from "next/link"

export default function GetTicketsButton() {
    return (
        <button className="pointer-events-none w-[200px] select-none rounded-[3px] bg-grey font-semibold text-white ">
            <Link
                href={"#"}
                className="flex h-full w-full justify-center px-4 py-2 lg:py-1"
                target="_blank"
            >
                Tickets unavailable
            </Link>
        </button>
    );
}