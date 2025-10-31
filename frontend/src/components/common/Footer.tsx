
export default function Footer() {
    return (    
        <footer className="w-full bg-white shadow-sm dark:bg-dark mt-10">
            <div className="container mx-auto py-4 px-6 text-center text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} My Auth App. All rights reserved.
            </div>
        </footer>
    );
}