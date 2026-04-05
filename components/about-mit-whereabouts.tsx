const COORDS = "(42.3601° N, 71.0942° W)";

/** Coordinates only, styled like the former “Education” section label. */
export function AboutCoordsHeading() {
  return (
    <span className="about-bio-section-label mx-auto block max-w-2xl text-center text-balance">
      {COORDS}
    </span>
  );
}
