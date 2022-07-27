const UnitIcon = (props: any) => (
  <svg
    width={20}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 6.333v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6m0 0V11.16a2 2 0 0 0-.586-1.414l-3-3a2 2 0 0 0-2.828 0l-3 3A2 2 0 0 0 1 11.16v4.172a2 2 0 0 0 2 2h3m5 0H6m0-4v4m9.001-12H15m-3.999 0H11m4.001 4H15m.001 4H15"
      stroke="#000"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UnitIcon;
