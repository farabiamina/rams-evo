import * as React from "react";
const SVGComponent = (props) => (
  <svg
    viewBox="0 0 63 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_f_399_1365)">
      <path
        d="M45.1576 14.6214C46.0188 14.1728 47.029 14.2197 47.8509 14.7499C48.6728 15.2801 49.1633 16.1956 49.1633 17.1989V32.6186C49.1633 33.6219 48.6728 34.5374 47.8509 35.0656C47.4017 35.3531 46.8995 35.4999 46.3934 35.4999C45.9717 35.4999 45.5499 35.4 45.1556 35.192L22.6735 25.0924L45.1576 14.6214Z"
        fill="#8237FF"
      />
    </g>
    <path
      d="M53.8095 8.13843C55.1404 7.43348 56.7017 7.50718 57.9719 8.3403C59.2421 9.17342 60.0001 10.6122 60.0001 12.1887V36.4197C60.0001 37.9963 59.2421 39.435 57.9719 40.2649C57.2777 40.7167 56.5016 40.9474 55.7194 40.9474C55.0676 40.9474 54.4158 40.7904 53.8065 40.4636L19.0613 24.5929L53.8095 8.13843Z"
      fill="url(#paint0_linear_399_1365)"
    />
    <g filter="url(#filter1_b_399_1365)">
      <path
        d="M31.2032 47H13.5417C6.15634 47 1 41.8785 1 34.5465V13.4535C1 6.11837 6.15634 1 13.5417 1H31.2032C38.5886 1 43.7449 6.11837 43.7449 13.4535V34.5465C43.7449 41.8785 38.5886 47 31.2032 47Z"
        fill="#8237FF"
        fillOpacity={0.35}
      />
      <path
        d="M13.5417 47.5H31.2032C35.0143 47.5 38.2807 46.1766 40.5959 43.8775C42.9113 41.5782 44.2449 38.3331 44.2449 34.5465V13.4535C44.2449 9.66541 42.9113 6.4202 40.5958 4.12126C38.2806 1.82257 35.0142 0.5 31.2032 0.5H13.5417C9.73071 0.5 6.46425 1.82257 4.14906 4.12126C1.8336 6.4202 0.5 9.66541 0.5 13.4535V34.5465C0.5 38.3331 1.83362 41.5782 4.14903 43.8775C6.46418 46.1766 9.73063 47.5 13.5417 47.5Z"
        stroke="url(#paint1_linear_399_1365)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_399_1365"
        x={13.6735}
        y={5.31567}
        width={44.4897}
        height={39.1843}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={4.5}
          result="effect1_foregroundBlur_399_1365"
        />
      </filter>
      <filter
        id="filter1_b_399_1365"
        x={-24}
        y={-24}
        width={92.7449}
        height={96}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={12} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_399_1365"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_399_1365"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_399_1365"
        x1={41.9027}
        y1={7.65796}
        x2={41.9027}
        y2={40.9474}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AC7AFF" />
        <stop offset={1} stopColor="#6E3BD1" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_399_1365"
        x1={0.875297}
        y1={0.687197}
        x2={41.3138}
        y2={45.5491}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0.4} />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SVGComponent;
