import { useDict } from "@/locales/dict";
import Link from "next/link"

export default function NavActionButton() {
    const { dictionary } = useDict();
    return (
        <button className="enabled w-max select-none rounded-[3px] bg-red font-semibold text-white mr-8">
            <Link
                href={"https://forms.gle/5DG2VAW7iGei7wvq8"}
                className="flex h-full w-full justify-center px-4 py-2 lg:py-1"
                target="_blank"
            >
                { dictionary.navbar.cta }
            </Link>
        </button>
    );
}