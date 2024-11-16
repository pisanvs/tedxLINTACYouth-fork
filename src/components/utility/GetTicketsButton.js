import { useDict } from "@/locales/dict";
import Link from "next/link"

export default function NavActionButton() {
    const { dictionary } = useDict();
    return (
        <button className="enabled w-[200px] select-none rounded-[3px] bg-red font-semibold text-white mr-8">
            <Link
                href={"https://forms.gle/HfVAVjydd9YNdT1z8"}
                className="flex h-full w-full justify-center px-4 py-2 lg:py-1"
                target="_blank"
            >
                { dictionary.navbar.cta }
            </Link>
        </button>
    );
}