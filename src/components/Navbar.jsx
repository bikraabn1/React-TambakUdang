import ThemeController from "./ThemeController";

export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-md">
                <div className="flex-none">
                    <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button" >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>

                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Tambak Udang</a>
                </div>
                
                <div className="flex-none">
                   <ThemeController  />
                </div>
            </div>
        </>
    )
}