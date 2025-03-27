import { useDict } from "@/locales/dict";
import Link from "next/link"

export default function NavActionButton() {
    const { dictionary } = useDict();
    return (
        <button className="disabled w-max select-none rounded-[3px] bg-gray-800 font-semibold text-white mr-8">
            <Link
                href={"about:blank"}
                className="flex h-full w-full justify-center px-4 py-2 lg:py-1"
                target="_blank"
            >
                { dictionary.navbar.cta }
            </Link>
        </button>
    );
}