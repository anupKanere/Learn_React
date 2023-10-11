import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/png;base64,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"
                                className="mr-3 h-32"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://www.linkedin.com/in/anup-kanere-02a021205/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Linkedin
                                    </a>
                                </li>
                                <li className="mb-4">
                                <a
                                        href="https://www.youtube.com/@anupkanere8571"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Youtube
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                {/* <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li> */}
                                <li>
                                    <Link to="/Termsandconditions" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 0291
                        <a href="https://www.linkedin.com/in/anup-kanere-02a021205/" className="hover:underline">
                            anupkanere
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="https://www.facebook.com/profile.php?id=100006595007481&mibextid=9R9pXO" className="text-gray-500 hover:text-blue-700" target='_blank'>
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        {/* <Link to="#" className="text-gray-500 hover:text-blue-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link> */}
                        <Link to="#" className="text-gray-500 hover:text-blue-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="https://github.com/anupKanere" className="text-gray-500 hover:text-blue-900" target='_blank'>
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        {/* <Link to="#" className="text-gray-500 hover:text-blue-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

