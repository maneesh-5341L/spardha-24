import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./ImageSlider.css";

const folderContexts = {
  "about-us-images": require.context(
    "./about-us-images/Day 3 Closing Ceremony",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  team: require.context(
    "./about-us-images/Sports",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  badminton: require.context(
    "./gallery/images/badminton",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  basketball: require.context(
    "./gallery/images/basketball",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  boxing: require.context(
    "./gallery/images/boxing",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  chess: require.context(
    "./gallery/images/chess",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  football: require.context(
    "./gallery/images/football",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  hockey: require.context(
    "./gallery/images/hockey",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  cricket: require.context(
    "./gallery/images/cricket",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  volleyball: require.context(
    "./gallery/images/volleyball",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  athletics: require.context(
    "./gallery/images/athletics",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  handball: require.context(
    "./gallery/images/handball",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  aquatics: require.context(
    "./gallery/images/aquatics",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  taekwondo: require.context(
    "./gallery/images/taekwondo",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  khokho: require.context(
    "./gallery/images/khokho",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  "z-tennis": require.context(
    "./gallery/images/z-tennis",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  powerlifting: require.context(
    "./gallery/images/powerlifting",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),

  closing: require.context(
    "./gallery/images/closing",
    true,
    /\.(jpg|jpeg|png|gif)$/i
  ),
};

function importAll(context) {
  return context.keys().map(context);
}

const pad = (value) => String(value).padStart(2, "0");

const AUTOPLAY_MS = 5500;

const ImageSlider = ({ folderName, categoryLabel }) => {
  const images = useMemo(() => {
    const context =
      folderContexts[folderName] ||
      folderContexts["about-us-images"];

    return importAll(context);
  }, [folderName]);

  const count = images.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const touchStartX = useRef(null);

  const moveTo = useCallback(
    (nextIndex) => {
      if (count <= 1) {
        return;
      }

      const normalized =
        (nextIndex + count) % count;

      setIndex(normalized);
    },
    [count]
  );

  const next = useCallback(() => {
    moveTo(index + 1);
  }, [index, moveTo]);

  const previous = useCallback(() => {
    moveTo(index - 1);
  }, [index, moveTo]);

  const goTo = useCallback(
    (nextIndex) => {
      moveTo(nextIndex);
    },
    [moveTo]
  );

  useEffect(() => {
    setIndex(0);
  }, [folderName]);

  useEffect(() => {
    if (count <= 1 || paused) {
      return undefined;
    }

    const autoplay = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTOPLAY_MS);

    return () => {
      window.clearInterval(autoplay);
    };
  }, [count, paused, folderName]);

  useEffect(() => {
    return () => {
      touchStartX.current = null;
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  const handleTouchStart = (event) => {
    if (!event.changedTouches.length) {
      return;
    }

    touchStartX.current =
      event.changedTouches[0].clientX;

    setPaused(true);
  };

  const handleTouchEnd = (event) => {
    if (
      touchStartX.current === null ||
      !event.changedTouches.length
    ) {
      return;
    }

    const endX =
      event.changedTouches[0].clientX;

    const delta =
      endX - touchStartX.current;

    touchStartX.current = null;

    setPaused(false);

    if (Math.abs(delta) < 45) {
      return;
    }

    if (delta < 0) {
      next();
    } else {
      previous();
    }
  };

  const getRelativePosition = (imageIndex) => {
    if (count === 0) {
      return 0;
    }

    let difference = imageIndex - index;

    if (difference > count / 2) {
      difference -= count;
    }

    if (difference < -count / 2) {
      difference += count;
    }

    return difference;
  };

  if (!count) {
    return null;
  }

  return (
    <div
      className="about-slider"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${categoryLabel} photo gallery`}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="about-slider__viewport">
        <div
          className="about-slider__fan"
          aria-live="polite"
        >
          {images.map((src, imageIndex) => {
            const position =
              getRelativePosition(imageIndex);

            const isActive = position === 0;

            const isVisible =
              Math.abs(position) <= 3;

            if (!isVisible) {
              return null;
            }

            return (
              <button
                key={`${src}-${imageIndex}`}
                type="button"
                className={`about-slider__card${
                  isActive
                    ? " is-active"
                    : ""
                }`}
                data-position={position}
                onClick={() => {
                  if (isActive) {
                    return;
                  }

                  goTo(imageIndex);
                }}
                aria-label={
                  isActive
                    ? `${categoryLabel} photo ${
                        imageIndex + 1
                      } of ${count}`
                    : `Show ${categoryLabel} photo ${
                        imageIndex + 1
                      } of ${count}`
                }
                aria-current={
                  isActive ? "true" : undefined
                }
                style={{
                  "--card-image": `url("${src}")`,
                }}
              >
                <img
                  className="about-slider__card-image"
                  src={src}
                  alt={`${categoryLabel} ${
                    imageIndex + 1
                  } of ${count}`}
                  draggable="false"
                />

                <span className="about-slider__card-shine" />
              </button>
            );
          })}
        </div>

        <div
          className="about-slider__glow"
          aria-hidden="true"
        />

        <div
          className="about-slider__badge"
          aria-hidden="true"
        >
          {pad(index + 1)} / {pad(count)}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className="about-slider__arrow about-slider__arrow--prev"
              onClick={previous}
              aria-label={`Previous ${categoryLabel}`}
            >
              <span aria-hidden="true">
                ‹
              </span>
            </button>

            <button
              type="button"
              className="about-slider__arrow about-slider__arrow--next"
              onClick={next}
              aria-label={`Next ${categoryLabel}`}
            >
              <span aria-hidden="true">
                ›
              </span>
            </button>
          </>
        )}

        {count > 1 && (
          <div
            className="about-slider__timer"
            aria-hidden="true"
          >
            <span
              className={`about-slider__timer-fill${
                paused
                  ? " is-paused"
                  : ""
              }`}
              key={`${index}-${paused}`}
            />
          </div>
        )}
      </div>

      <div className="about-slider__controls">
        <button
          type="button"
          className="about-slider__nav"
          onClick={previous}
          disabled={count <= 1}
          aria-label={`Previous ${categoryLabel} photo`}
        >
          <span aria-hidden="true">
            ‹
          </span>

          <span className="about-slider__nav-label">
            Previous
          </span>
        </button>

        <div
          className="about-slider__status"
          aria-live="polite"
        >
          <span className="about-slider__count">
            {pad(index + 1)} / {pad(count)}
          </span>

          <div
            className="about-slider__progress"
            aria-hidden="true"
          >
            <span
              className="about-slider__progress-fill"
              style={{
                width: `${
                  ((index + 1) / count) *
                  100
                }%`,
              }}
            />
          </div>
        </div>

        <button
          type="button"
          className="about-slider__nav"
          onClick={next}
          disabled={count <= 1}
          aria-label={`Next ${categoryLabel} photo`}
        >
          <span className="about-slider__nav-label">
            Next
          </span>

          <span aria-hidden="true">
            ›
          </span>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
