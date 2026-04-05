const COORDS = "(42.3601° N, 71.0942° W)";

/** Coordinates only: uppercase tracking, larger than section-label microtype. */
export function AboutCoordsHeading() {
  return (
    <span className="about-coords-heading mx-auto block max-w-2xl text-center text-balance">
      {COORDS}
    </span>
  );
}
