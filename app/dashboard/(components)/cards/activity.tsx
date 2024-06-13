const Activity = () => {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-300 to-gray-4z00 text-gray-900 shadow-md w-full max-w-[20rem] p-8">
      <div className="relative pb-4 m-0 mb-4 overflow-hidden text-center text-gray-900 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-900 uppercase">
          Activity
        </p>
        <h1 className="flex justify-center gap-1 mt-4 font-sans antialiased  tracking-normal text-gray-900 font-semibold">
          <span className="mt-2 text-xl">400,000</span>
          <span className="self-end text-xl">RWF</span>
        </h1>
      </div>
      <div className="p-0">
        <ul className="flex flex-col gap-4">
            <li className="font-bold uppercase text-sm">Requirements</li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              5 team members
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              200+ components
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              40+ built-in pages
            </p>
          </li>
        </ul>
      </div>
      <div className="p-0 mt-12">
        <button
          className="align-middle  text-center  disabled:pointer-events-none text-sm py-1 px-7 rounded bg-emerald-700 text-white shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full"
          type="button"
        >
          Edit Activity
        </button>
      </div>
    </div>
  );
};
export default Activity;
