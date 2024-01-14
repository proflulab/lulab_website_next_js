import React from "react";
export const ChevronDown = ({ fill, size, height, width, ...props }: any) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Lock = ({ fill, size, height, width, ...props }: any) => {
  const color = fill;

  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(3.5 2)">
        <path
          d="M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(3.85 0.75)"
        />
        <path
          d="M.5,0V2.221"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(7.91 12.156)"
        />
        <path
          d="M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(0.75 6.824)"
        />
      </g>
    </svg>
  );
};

export const Activity = ({ fill, size, height, width, ...props }: any) => {
  const svgStyle = {
    fill: "#9b14cc",
    width: "30px",
    height: "30px",
    viewBox: "0 0 1069.00 1069.00",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    stroke: "#9b14cc",
  };

  const rectStyle = {
    fill: "none",
  };

  const pathStyle = {
    fillOpacity: 0.5,
  };

  return (
    <svg
      {...svgStyle}
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsSerif="http://www.serif.com/"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <rect
          height="1066.67"
          id="Console"
          style={rectStyle}
          width="1066.67"
          x="1.397"
          y="0.592"
        ></rect>
        <g>
          <path d="M434.469,693.912l200.523,-0c13.34,46.165 44.047,85.433 85.747,109.508c42.759,24.687 93.575,31.377 141.267,18.598c0.035,-0.01 0.071,-0.019 0.106,-0.029c47.692,-12.779 88.355,-43.98 113.042,-86.74c24.687,-42.759 31.377,-93.575 18.598,-141.267c-17.208,-64.223 -37.272,-139.1 -54.48,-203.323c-12.779,-47.692 -43.98,-88.355 -86.74,-113.042c-42.76,-24.687 -93.575,-31.377 -141.267,-18.598c-0.036,0.009 -0.071,0.019 -0.107,0.029c-27.438,7.351 -52.55,20.801 -73.63,39.042c0.013,-0.012 -205.608,-0.012 -205.608,-0.012c-21.055,-18.223 -46.172,-31.677 -73.617,-39.031c-0.035,-0.009 -0.071,-0.019 -0.106,-0.028c-47.692,-12.779 -98.508,-6.089 -141.267,18.598c-42.76,24.687 -73.961,65.35 -86.74,113.042c-17.209,64.223 -37.272,139.1 -54.481,203.323c-12.779,47.692 -6.089,98.508 18.598,141.267c24.688,42.76 65.35,73.961 113.042,86.74c0.036,0.01 0.071,0.019 0.107,0.029c47.692,12.779 98.507,6.089 141.267,-18.598c41.699,-24.075 72.406,-63.343 85.746,-109.508Zm254.788,-38.789c-7.111,-24.401 -29.867,-23.713 -30.333,-23.711c-125.182,0.391 -248.387,-0 -248.387,-0c-16.192,0.388 -27,11.117 -30.332,23.711c-2.122,8.02 -3.362,12.53 -4.992,18.63c-2.627,9.835 -2.635,9.833 -0.12,0.449c-8.489,31.681 -29.216,58.692 -57.62,75.091c-28.404,16.399 -62.16,20.843 -93.841,12.354l-0.107,-0.028c-31.681,-8.489 -58.692,-29.215 -75.091,-57.62c-16.399,-28.404 -20.843,-62.16 -12.354,-93.841c17.208,-64.223 37.271,-139.1 54.48,-203.323c8.489,-31.681 29.215,-58.692 57.62,-75.092c28.404,-16.399 62.16,-20.843 93.84,-12.354l0.107,0.029c21.15,5.667 40.219,16.788 55.438,32.007c5.861,5.861 13.809,9.153 22.097,9.153l230.137,0c8.288,0 16.237,-3.292 22.097,-9.153c15.219,-15.219 34.288,-26.34 55.438,-32.007l0.107,-0.029c31.681,-8.489 65.437,-4.045 93.841,12.354c28.404,16.4 49.131,43.411 57.62,75.092c17.208,64.223 37.271,139.1 54.48,203.323c8.489,31.681 4.045,65.437 -12.354,93.841c-16.4,28.405 -43.411,49.131 -75.092,57.62l-0.107,0.028c-31.681,8.489 -65.436,4.045 -93.841,-12.354c-28.124,-16.238 -48.721,-42.879 -57.365,-74.156l-5.366,-20.014Zm-254.973,38.789l-0.014,-0l-0.085,0.229l-0.654,1.495c0.268,-0.564 0.52,-1.139 0.753,-1.724Zm-149.553,-233.128l-31.026,0c-17.247,0 -31.25,14.003 -31.25,31.25c0,17.247 14.003,31.25 31.25,31.25l31.026,0l-0,31.026c-0,17.247 14.002,31.25 31.25,31.25c17.247,-0 31.25,-14.003 31.25,-31.25l-0,-31.026l31.025,0c17.248,0 31.25,-14.003 31.25,-31.25c0,-17.247 -14.002,-31.25 -31.25,-31.25l-31.025,0l-0,-31.026c-0,-17.247 -14.003,-31.25 -31.25,-31.25c-17.248,0 -31.25,14.003 -31.25,31.25l-0,31.026Z"></path>{" "}
          <path
            d="M720.632,552.486c-0,-18.253 14.819,-33.073 33.073,-33.073c18.254,0 33.073,14.82 33.073,33.073c0,18.254 -14.819,33.074 -33.073,33.074c-18.254,-0 -33.073,-14.82 -33.073,-33.074Zm93.525,-93.525c18.254,-0 33.074,14.819 33.074,33.073c-0,18.254 -14.82,33.073 -33.074,33.073c-18.253,0 -33.073,-14.819 -33.073,-33.073c0,-18.254 14.82,-33.073 33.073,-33.073Zm-120.904,-0c18.253,-0 33.073,14.819 33.073,33.073c-0,18.254 -14.82,33.073 -33.073,33.073c-18.254,0 -33.074,-14.819 -33.074,-33.073c0,-18.254 14.82,-33.073 33.074,-33.073Zm27.379,-27.379c-0,-18.254 14.819,-33.074 33.073,-33.074c18.254,0 33.073,14.82 33.073,33.074c0,18.253 -14.819,33.073 -33.073,33.073c-18.254,-0 -33.073,-14.82 -33.073,-33.073Z"
            style={pathStyle}
          ></path>
        </g>
      </g>
    </svg>
  );
};
export const Flash = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: any) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Server = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: any) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const TagUser = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: any) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Scale = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: any) => {
  return (
    <svg
      fill="#f80d0d"
      height="30px"
      width="30px"
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      stroke="#f80d0d"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M27,8H5c-1.7,0-3,1.3-3,3v10c0,1.7,1.3,3,3,3h6.2c0.8,0,1.6-0.3,2.1-0.9l2-2c0.4-0.4,1-0.4,1.4,0l2,2 c0.6,0.6,1.3,0.9,2.1,0.9H27c1.7,0,3-1.3,3-3V11C30,9.3,28.7,8,27,8z M9,20c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S11.2,20,9,20z M23,20c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S25.2,20,23,20z"></path>{" "}
      </g>
    </svg>
  );
};
export const Leadership = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: any) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      stroke="#000000"
      stroke-width="0.01024"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M764.077495 365.4687c25.787576-28.703601 41.628106-66.514662 41.628106-108.047547 0-89.337066-72.67538-162.023709-162.023709-162.02371S481.658182 168.084087 481.658182 257.421153h45.226039c0-64.405459 52.403475-116.797671 116.797671-116.797671s116.797671 52.392212 116.79767 116.797671-52.403475 116.797671-116.79767 116.79767c-20.647671 0-40.964628-5.4655-58.741325-15.822099l-22.745613 39.086822c24.666421 14.365111 52.844769 21.961316 81.486938 21.961316 31.034988 0 59.955653-8.924184 84.62105-24.116595 2.73275 4.021822 144.402643 55.220183 154.273921 292.470796 0.507847 12.15659 10.511207 21.674628 22.568481 21.674628 0.330715 0 0.639928-0.011263 0.971667-0.022526 12.477067-0.51911 22.171213-11.052842 21.641864-23.529908-9.692098-233.333227-126.929016-303.970051-163.68138-320.452557z"
          fill="#74E8AE"
        ></path>
        <path
          d="M541.966052 518.12181c29.268786-33.91313 47.104868-77.952485 47.104868-126.15803 0-106.683731-86.809093-193.481562-193.492825-193.481562S202.107796 285.279025 202.107796 391.962756c0 48.204521 17.828915 92.240805 47.090534 126.153935-51.365255 30.577311-153.310445 121.144064-153.310445 358.758155 0 12.488329 10.113939 22.613531 22.613531 22.613531s22.613531-10.125202 22.613531-22.613531c0-244.454669 113.552978-312.788776 143.593774-326.583583 31.432256 22.083159 69.622154 35.163294 110.869374 35.163294 41.246196 0 79.440191-13.080135 110.876542-35.163294 30.045915 13.80607 143.609132 82.134033 143.609132 326.583583 0 12.488329 10.113939 22.613531 22.613531 22.613531 12.498568 0 22.613531-10.125202 22.613531-22.613531-0.001024-237.6059-101.951333-328.172653-153.324779-358.753036zM247.333835 391.962756c0-81.752124 66.492137-148.255523 148.24426-148.255523s148.265762 66.5034 148.265762 148.255523-66.514662 148.265762-148.265762 148.265762-148.244261-66.513638-148.24426-148.265762z"
          fill="#22C67F"
        ></path>
      </g>
    </svg>
  );
};
export const Marketing = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: any) => {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M879.987457 420.058169v-42.616155H721.067144V270.902651h-42.616155v106.539363H507.988417V270.902651h-42.616155v106.539363H252.293535v42.616155h213.078727v127.847442H316.216744v42.616155h149.155518v106.539363h42.616155V590.520742h170.462572v106.539363h42.616155V590.520742h149.155519V547.904587H721.067144V420.058169h158.920313zM678.450989 547.905611H507.988417V420.058169h170.462572v127.847442z"
          fill="#f58447"
        ></path>
        <path
          d="M926.571168 323.007151a63.866895 63.866895 0 0 0-14.773641-51.199385 63.867919 63.867919 0 0 0-48.442063-22.213193H247.192538L218.285184 134.96242l-0.010239 0.003072v-0.003072h-101.080007c-11.767514 0-21.308077 9.540563-21.308077 21.308078 0 11.768538 9.540563 21.308077 21.308077 21.308077h67.886669l69.68154 276.331291 66.115347 264.459341h31.700513c-21.981794 17.586254-36.36124 44.30147-36.361239 74.577759 0 52.874462 43.011375 95.885837 95.885836 95.885837s95.885837-43.011375 95.885837-95.885837c0-30.276289-14.379446-56.991505-36.361239-74.577759h243.186075c-21.981794 17.586254-36.36124 44.30147-36.36124 74.577759 0 52.874462 43.011375 95.885837 95.885837 95.885837s95.885837-43.011375 95.885837-95.885837c0-30.276289-14.379446-56.991505-36.36124-74.577759h33.406307l59.30139-395.362056zM412.102581 846.215624c-29.381413 0-53.269682-23.898507-53.269682-53.269682s23.888269-53.269682 53.269682-53.269682 53.269682 23.898507 53.269681 53.269682-23.888269 53.269682-53.269681 53.269682z m362.234245 0c-29.381413 0-53.269682-23.898507-53.269682-53.269682s23.888269-53.269682 53.269682-53.269682 53.269682 23.898507 53.269682 53.269682-23.888269 53.269682-53.269682 53.269682zM258.286336 292.210728h605.069128c6.305086 0 12.027581 2.632409 16.147696 7.397572 4.099637 4.775401 5.847409 10.840898 4.910554 17.073288l-53.852273 359.071464H354.172173L322.291455 548.234278l0.195562-0.049147-24.101236-95.578671-40.099445-160.395732z"
          fill="#f2521c"
        ></path>
      </g>
    </svg>
  );
};
