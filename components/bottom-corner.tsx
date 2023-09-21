export default function BottomCorner() {
  return (
    <>
      <svg
        className="bottomSvg"
        width="300"
        height="300"
        data-name="corner-bottom-right"
        xmlns="http://www.w3.org/2000/svg"
        data-inlinesvg=".inlineSvgFile-7"
      >
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0" className="gradient1"></stop>
            <stop offset=".5" className="gradient2"></stop>
            <stop offset="1" className="gradient1"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url('#grad2')"
          d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"
        ></path>
      </svg>
    </>
  );
}
