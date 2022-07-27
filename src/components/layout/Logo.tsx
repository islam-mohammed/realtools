const Logo = (props: any) => (
  <div className="flex">
    <svg
      width={30}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 1.719C0 .769.77 0 1.719 0H28.28a1.719 1.719 0 1 1 0 3.438H1.72C.769 3.438 0 2.667 0 1.718Zm5.045 3.093a3 3 0 0 0-3 3V24.5a3 3 0 0 0 3 3h19.91a3 3 0 0 0 3-3V7.812a3 3 0 0 0-3-3H5.044ZM19.773 9.97c0 .57-.462 1.031-1.032 1.031h-8.164a1.031 1.031 0 0 1 0-2.063h8.164c.57 0 1.032.462 1.032 1.032Z"
        fill="#FFCE31"
      />
    </svg>
    <span
      className={`ml-2 hidden lg:block font-inter font-semibold text-xl text-white ${props.className}`}
    >
      StorageConnect
    </span>
  </div>
);

export default Logo;
