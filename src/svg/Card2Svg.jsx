import * as React from "react";
const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={57}
    // height={69}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M19.09 33.672a10.242 10.242 0 0 1 11.633-16.72l6.603 3.622c5.752 3.156 7.5 10.602 3.753 15.988-3.747 5.386-11.336 6.336-16.296 2.04l-5.692-4.93Z"
    />
    <path
      fill="#8237FF"
      d="M19.09 33.672a10.242 10.242 0 0 1 11.633-16.72l6.603 3.622c5.752 3.156 7.5 10.602 3.753 15.988-3.747 5.386-11.336 6.336-16.296 2.04l-5.692-4.93Z"
    />
    <g filter="url(#b)" opacity={0.5}>
      <path
        fill="#BA90FF"
        fillOpacity={0.3}
        d="M22.449 31.538a6.054 6.054 0 0 1 6.876-9.884l3.902 2.141c3.4 1.866 4.434 6.267 2.219 9.45-2.215 3.185-6.701 3.746-9.632 1.207l-3.365-2.914Z"
      />
    </g>
    <g filter="url(#c)">
      <path
        fill="#BA90FF"
        fillOpacity={0.3}
        d="M48.995 48.167c-1.834 0-3.326-1.478-3.326-3.295 0-1.82 1.492-3.298 3.326-3.298.444 0 .87-.174 1.183-.484.315-.312.492-.735.492-1.176l-.003-5.98c0-5.054-4.152-9.166-9.253-9.166H15.256c-5.102 0-9.254 4.112-9.254 9.167L6 40.107c0 .44.176.863.491 1.175.313.31.74.485 1.184.485 1.896 0 3.326 1.334 3.326 3.105 0 1.817-1.492 3.295-3.326 3.295-.925 0-1.675.744-1.675 1.66v5.975c0 5.055 4.15 9.169 9.253 9.169h26.163c5.104 0 9.254-4.114 9.254-9.169v-5.975c0-.916-.75-1.66-1.675-1.66Z"
      />
      <path
        stroke="url(#d)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M50.92 39.914v0l-.003-5.98s0 0 0 0c0-5.194-4.266-9.416-9.503-9.416H15.256c-5.238 0-9.504 4.222-9.504 9.417 0 0 0 0 0 0l-.002 6.172v0c0 .507.203.994.565 1.353.36.356.85.557 1.36.557 1.775 0 3.076 1.238 3.076 2.855 0 1.676-1.378 3.045-3.076 3.045-1.06 0-1.925.853-1.925 1.91v5.975c0 5.195 4.264 9.419 9.503 9.419h26.163c5.24 0 9.504-4.224 9.504-9.419v-5.975c0-1.057-.865-1.91-1.925-1.91-1.698 0-3.076-1.369-3.076-3.045 0-1.68 1.378-3.048 3.076-3.048.51 0 1-.2 1.36-.557.361-.359.565-.845.565-1.353Z"
      />
    </g>
    <g filter="url(#e)">
      <mask id="h" fill="#fff">
        <path
          fillRule="evenodd"
          d="M40.46 34.614H31.38a3.247 3.247 0 0 0-2.581 1.265l-4.096 5.365a.69.69 0 0 1-.369.252L17.49 43.37a2.248 2.248 0 0 0-1.644 2.18v2.504c0 1.246.974 2.282 2.22 2.282h.596a4.701 4.701 0 0 1 9.376 0h12.421V34.614ZM20.052 50.67a3.297 3.297 0 1 1 6.594 0 3.297 3.297 0 0 1-6.594 0Z"
          clipRule="evenodd"
        />
      </mask>
      <path
        fill="url(#f)"
        fillRule="evenodd"
        d="M40.46 34.614H31.38a3.247 3.247 0 0 0-2.581 1.265l-4.096 5.365a.69.69 0 0 1-.369.252L17.49 43.37a2.248 2.248 0 0 0-1.644 2.18v2.504c0 1.246.974 2.282 2.22 2.282h.596a4.701 4.701 0 0 1 9.376 0h12.421V34.614ZM20.052 50.67a3.297 3.297 0 1 1 6.594 0 3.297 3.297 0 0 1-6.594 0Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#g)"
        fillOpacity={0.5}
        d="M40.46 34.614h.5v-.5h-.5v.5Zm-9.079 0-.002.5h.002v-.5Zm-1.438.33-.22-.448.22.449Zm-1.143.934-.396-.305-.002.002.398.303Zm-4.096 5.366-.397-.303-.004.004.401.3Zm-.369.252.132.482h.001l-.133-.482ZM17.49 43.37l-.132-.482h-.002l.134.482Zm-1.191.812.399.301-.4-.301Zm-.453 1.369h.5v-.004l-.5.004Zm2.816 4.785v.5h.464l.035-.462-.499-.038Zm4.332-4.332-.038-.498.038.498Zm5.044 4.332-.5.038.036.462h.463v-.5Zm12.421 0v.5h.5v-.5h-.5Zm-13.812.335h.5-.5Zm-3.297 3.297v.5-.5Zm17.11-19.853H31.38v1h9.078v-1Zm-9.078 0a3.746 3.746 0 0 0-1.66.382l.44.898a2.746 2.746 0 0 1 1.218-.28l.003-1Zm-1.66.382a3.747 3.747 0 0 0-1.318 1.077l.792.61c.257-.333.588-.604.967-.79l-.44-.897Zm-1.32 1.08-4.095 5.365.795.606 4.095-5.365-.795-.607Zm-4.099 5.369a.19.19 0 0 1-.101.07l.266.963a1.19 1.19 0 0 0 .637-.435l-.802-.598Zm-.1.069-6.845 1.873.264.965 6.845-1.873-.264-.965Zm-6.847 1.874a2.747 2.747 0 0 0-1.456.992l.798.602c.231-.306.557-.528.926-.631l-.268-.963Zm-1.456.992a2.747 2.747 0 0 0-.554 1.673l1-.007a1.747 1.747 0 0 1 .352-1.064l-.798-.602Zm-.554 1.67v2.503h1V45.55h-1Zm0 2.503c0 1.504 1.18 2.782 2.72 2.782v-1c-.952 0-1.72-.794-1.72-1.782h-1Zm2.72 2.782h.596v-1h-.596v1Zm1.095-.462a4.201 4.201 0 0 1 3.87-3.871l-.075-.997a5.201 5.201 0 0 0-4.792 4.792l.997.076Zm3.87-3.871a4.201 4.201 0 0 1 4.508 3.871l.997-.076a5.201 5.201 0 0 0-5.58-4.792l.076.997Zm5.007 4.333h12.421v-1H28.037v1Zm12.921-.5V34.614h-1v15.721h1ZM23.35 46.873a3.797 3.797 0 0 0-3.797 3.797h1a2.797 2.797 0 0 1 2.797-2.797v-1Zm3.797 3.797c0-2.097-1.7-3.797-3.797-3.797v1a2.797 2.797 0 0 1 2.797 2.797h1Zm-3.796 3.797a3.801 3.801 0 0 0 3.797-3.797h-1a2.801 2.801 0 0 1-2.798 2.797v1Zm-3.798-3.797c0 2.097 1.7 3.797 3.797 3.797v-1a2.797 2.797 0 0 1-2.797-2.797h-1Z"
        mask="url(#h)"
      />
    </g>
    <defs>
      <linearGradient
        id="a"
        x1={23.399}
        x2={20.889}
        y1={11.442}
        y2={44.138}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BC94FF" />
        <stop offset={1} stopColor="#9F66FF" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={13.111}
        x2={45.731}
        y1={29.452}
        y2={66.373}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.37} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="f"
        x1={38.714}
        x2={11.315}
        y1={38.109}
        y2={39.245}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0.2} />
      </linearGradient>
      <linearGradient
        id="g"
        x1={20.122}
        x2={53.829}
        y1={41.106}
        y2={41.488}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <filter
        id="b"
        width={56.258}
        height={55.139}
        x={0.358}
        y={0.907}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_680_1300"
          stdDeviation={10}
        />
      </filter>
      <filter
        id="c"
        width={93.67}
        height={89.203}
        x={-18.5}
        y={0.268}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={12} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_680_1300"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_680_1300"
          result="shape"
        />
      </filter>
      <filter
        id="e"
        width={54.614}
        height={49.353}
        x={0.846}
        y={19.614}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={7.5} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_680_1300"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={5} dy={5} />
        <feGaussianBlur stdDeviation={5} />
        <feColorMatrix values="0 0 0 0 0.509804 0 0 0 0 0.215686 0 0 0 0 1 0 0 0 0.35 0" />
        <feBlend
          in2="effect1_backgroundBlur_680_1300"
          result="effect2_dropShadow_680_1300"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_680_1300"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SVGComponent;
