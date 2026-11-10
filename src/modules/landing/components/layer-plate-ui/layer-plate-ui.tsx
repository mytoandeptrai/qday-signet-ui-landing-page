/** One isometric plate of the lattice. Shared by the pinned and flat diagrams. */
type LayerPlateUiProps = {
  uid: string;
  stroke?: string;
};

const LayerPlateUi = ({ uid, stroke = "var(--border)" }: LayerPlateUiProps) => {
  return (
    <>
      <defs>
        <pattern id={`${uid}-lattice`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M0 0L24 24M24 0L0 24" stroke="var(--border)" strokeWidth="1" fill="none" />
        </pattern>
        <clipPath id={`${uid}-clip`}>
          <path d="M200 0L400 100L200 200L0 100Z" />
        </clipPath>
      </defs>
      <path d="M200 0L400 100L200 200L0 100Z" fill="var(--card)" />
      <rect width="400" height="200" fill={`url(#${uid}-lattice)`} clipPath={`url(#${uid}-clip)`} />
      <path
        d="M200 0L400 100L200 200L0 100Z"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
        style={{ transition: "stroke 300ms" }}
      />
    </>
  );
};

export default LayerPlateUi;
