import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header className="w-full bg-white shadow-sm dark:bg-dark">
            <div className="container mx-auto flex items-center justify-end py-4 px-6">
                <Link

                    to="/login"
                    className="px-5 py-2 text-base font-medium text-dark hover:text-primary dark:text-black dark:hover:text-primary"
                >Login
                </Link>
                <Link
                    to="/register"
                    className="ml-4 rounded-md bg-dark px-6 py-2 text-base font-medium text-black hover:bg-body-color dark:bg-dark-2"
                >Register
                </Link>
            </div>
        </header>
    );
}