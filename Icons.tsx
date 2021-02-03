import * as React from 'react';
import Svg, {
  SvgProps,
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

function IconClose(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={4.00012}
        y={14.9094}
        width={15.4276}
        height={1.54276}
        rx={0.771379}
        transform="rotate(-45 4.00012 14.9094)"
        fill="#C9D4DB"
      />
      <Rect
        x={14.9089}
        y={15.9998}
        width={15.4276}
        height={1.54276}
        rx={0.771379}
        transform="rotate(-135 14.9089 15.9998)"
        fill="#C9D4DB"
      />
    </Svg>
  );
}

function SwitzerlandFlag(props: SvgProps) {
  return (
    <Svg
      width={38}
      height={32}
      viewBox="0 0 38 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_d)">
        <Path
          d="M35.0001 5.3335H3.00006V26.6664H35.0001V5.3335Z"
          fill="#D80027"
        />
        <Path
          d="M25.2609 13.9132H21.087V9.73926H16.9131V13.9132H12.7392V18.0871H16.9131V22.261H21.087V18.0871H25.2609V13.9132Z"
          fill="#FAFAFA"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

function GoodReview(props: SvgProps) {
  return (
    <Svg
      width={150}
      height={150}
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        opacity={0.3}
        d="M73.8894 128.845C103.822 128.845 128.088 104.579 128.088 74.6462C128.088 44.7131 103.822 20.4475 73.8894 20.4475C43.9562 20.4475 19.6907 44.7131 19.6907 74.6462C19.6907 104.579 43.9562 128.845 73.8894 128.845Z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M73.8893 126.125C102.32 126.125 125.368 103.077 125.368 74.646C125.368 46.2152 102.32 23.1675 73.8893 23.1675C45.4585 23.1675 22.4108 46.2152 22.4108 74.646C22.4108 103.077 45.4585 126.125 73.8893 126.125Z"
        fill="url(#paint1_linear)"
      />
      <Path
        d="M73.8892 13.1502C76.2131 13.1502 78.097 11.2663 78.097 8.94239C78.097 6.61851 76.2131 4.73462 73.8892 4.73462C71.5653 4.73462 69.6815 6.61851 69.6815 8.94239C69.6815 11.2663 71.5653 13.1502 73.8892 13.1502Z"
        fill="url(#paint2_linear)"
      />
      <Path
        opacity={0.05}
        d="M73.8894 17.8847C78.8281 17.8847 82.8317 13.8811 82.8317 8.94235C82.8317 4.00363 78.8281 0 73.8894 0C68.9506 0 64.947 4.00363 64.947 8.94235C64.947 13.8811 68.9506 17.8847 73.8894 17.8847Z"
        fill="url(#paint3_linear)"
      />
      <Path
        opacity={0.175}
        d="M73.8893 15.5173C77.5206 15.5173 80.4643 12.5736 80.4643 8.94225C80.4643 5.31094 77.5206 2.36719 73.8893 2.36719C70.258 2.36719 67.3142 5.31094 67.3142 8.94225C67.3142 12.5736 70.258 15.5173 73.8893 15.5173Z"
        fill="url(#paint4_linear)"
      />
      <Path
        opacity={0.3}
        d="M73.8892 13.1502C76.2131 13.1502 78.097 11.2663 78.097 8.94239C78.097 6.61851 76.2131 4.73462 73.8892 4.73462C71.5653 4.73462 69.6815 6.61851 69.6815 8.94239C69.6815 11.2663 71.5653 13.1502 73.8892 13.1502Z"
        fill="url(#paint5_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.9123 57.7264L56.9083 57.7311L56.909 57.7303M56.9082 57.7312C56.6125 58.0929 56.0797 58.1475 55.7167 57.8527C55.3531 57.5573 55.2978 57.0231 55.5931 56.6595L56.2515 57.1943C55.5931 56.6595 55.5934 56.6591 55.5938 56.6587L55.5945 56.6578L55.5962 56.6557L55.6009 56.65C55.6045 56.6456 55.6092 56.64 55.6149 56.6333C55.6263 56.6197 55.6418 56.6016 55.6614 56.5793C55.7004 56.5347 55.7557 56.4734 55.8265 56.3991C55.968 56.2509 56.1727 56.0499 56.4353 55.8275C56.9573 55.3853 57.726 54.8431 58.6967 54.4721C59.6739 54.0987 60.8598 53.8981 62.1889 54.1537C63.5179 54.4092 64.9289 55.1092 66.3752 56.4398C66.7199 56.757 66.7423 57.2936 66.4251 57.6384C66.1079 57.9831 65.5713 58.0055 65.2265 57.6883C63.9705 56.5327 62.8367 56.0058 61.8685 55.8196C60.9004 55.6335 60.0368 55.7762 59.3023 56.0569C58.5612 56.3401 57.9559 56.7627 57.5319 57.1219C57.3214 57.3002 57.1602 57.4589 57.0538 57.5704C57.0008 57.626 56.9617 57.6694 56.9374 57.6971C56.9253 57.711 56.9169 57.7209 56.9123 57.7264M56.9082 57.7312L56.9083 57.7311C56.9082 57.7312 56.9081 57.7313 56.9081 57.7313L56.9082 57.7312L56.9082 57.7312Z"
        fill="url(#paint6_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.9331 58.6321L82.9292 58.6368L82.9298 58.6361M82.9291 58.6369C82.6334 58.9987 82.1005 59.0533 81.7375 58.7585C81.3739 58.4631 81.3186 57.9289 81.6139 57.5653L82.2723 58.1001C81.6139 57.5653 81.6142 57.5649 81.6146 57.5645L81.6153 57.5636L81.617 57.5615L81.6217 57.5558C81.6254 57.5514 81.63 57.5458 81.6357 57.539C81.6471 57.5255 81.6626 57.5073 81.6822 57.485C81.7212 57.4404 81.7765 57.3791 81.8473 57.3049C81.9888 57.1567 82.1935 56.9557 82.4561 56.7332C82.9781 56.2911 83.7468 55.7488 84.7175 55.3779C85.6947 55.0045 86.8806 54.8039 88.2097 55.0594C89.5387 55.315 90.9497 56.0149 92.396 57.3456C92.7408 57.6628 92.7631 58.1994 92.4459 58.5441C92.1287 58.8889 91.5921 58.9112 91.2474 58.5941C89.9914 57.4385 88.8576 56.9116 87.8893 56.7254C86.9213 56.5392 86.0576 56.6819 85.3231 56.9626C84.582 57.2458 83.9767 57.6685 83.5527 58.0277C83.3423 58.2059 83.181 58.3647 83.0746 58.4761C83.0216 58.5317 82.9825 58.5752 82.9582 58.6029C82.9461 58.6168 82.9377 58.6267 82.9331 58.6321M82.9291 58.6369L82.9292 58.6368C82.9289 58.6372 82.9288 58.6372 82.929 58.637L82.9291 58.6369Z"
        fill="url(#paint7_linear)"
      />
      <Path
        d="M66.8255 74.5063C66.9526 79.4717 71.509 81.159 74.3543 81.0862C77.1999 81.0133 81.5327 79.4605 81.4055 74.495C81.2944 70.1543 78.7605 73.4573 74.2988 73.5715C70.1568 73.6775 66.719 70.3464 66.8255 74.5063Z"
        fill="url(#paint8_linear)"
      />
      <Path
        d="M19.5274 50.6242C17.3803 52.4464 13.1222 50.9701 11.2031 47.9714C9.85972 45.8723 9.1801 41.3589 11.685 39.2329C13.0934 38.0377 14.6043 36.7554 17.2749 41.0646C20.2817 45.9162 21.4072 49.0288 19.5274 50.6242Z"
        fill="url(#paint9_linear)"
      />
      <Path
        d="M17.425 39.5734C16.6345 40.2442 16.3373 41.3253 16.7613 41.9877C18.4851 44.6812 19.0424 46.8168 17.6385 48.6211C16.9948 49.448 16.9795 50.4854 17.6043 50.938C18.2291 51.3906 19.2574 51.0883 19.9012 50.2599C22.9327 46.3643 21.5465 42.562 19.624 39.558C19.2001 38.8956 18.2155 38.9025 17.425 39.5734Z"
        fill="url(#paint10_linear)"
      />
      <Path
        d="M129.502 50.6242C131.649 52.4464 135.908 50.9701 137.827 47.9714C139.17 45.8723 139.85 41.3589 137.345 39.2329C135.936 38.0377 134.425 36.7554 131.755 41.0646C128.748 45.9162 127.623 49.0288 129.502 50.6242Z"
        fill="url(#paint11_linear)"
      />
      <Path
        d="M131.605 39.5734C132.395 40.2442 132.692 41.3253 132.268 41.9877C130.545 44.6812 129.987 46.8168 131.391 48.6211C132.035 49.448 132.05 50.4854 131.425 50.938C130.801 51.3906 129.772 51.0883 129.129 50.2599C126.097 46.3643 127.483 42.562 129.406 39.558C129.83 38.8956 130.814 38.9025 131.605 39.5734Z"
        fill="url(#paint12_linear)"
      />
      <Path
        opacity={0.1}
        d="M74.0366 150C85.6416 150 95.0493 148.824 95.0493 147.373C95.0493 145.922 85.6416 144.746 74.0366 144.746C62.4316 144.746 53.0239 145.922 53.0239 147.373C53.0239 148.824 62.4316 150 74.0366 150Z"
        fill="black"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={79.0188}
          y1={20.679}
          x2={68.7319}
          y2={128.588}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EBF6FF" />
          <Stop offset={0.46178} stopColor="#E9F5FF" />
          <Stop offset={0.68927} stopColor="#E1F2FF" />
          <Stop offset={0.86503} stopColor="#D4ECFF" />
          <Stop offset={0.99811} stopColor="#C4E5FF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={65.4514}
          y1={23.8667}
          x2={82.3024}
          y2={125.436}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EBF6FF" />
          <Stop offset={0.46178} stopColor="#E9F5FF" />
          <Stop offset={0.68927} stopColor="#E1F2FF" />
          <Stop offset={0.86503} stopColor="#D4ECFF" />
          <Stop offset={0.99811} stopColor="#C4E5FF" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear"
          x1={75.356}
          y1={5.00742}
          x2={72.3972}
          y2={12.8873}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#62F4C0" />
          <Stop offset={0.25009} stopColor="#4FD7D7" />
          <Stop offset={0.54216} stopColor="#3EBCED" />
          <Stop offset={0.80165} stopColor="#34ACFA" />
          <Stop offset={1} stopColor="#30A6FF" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1={77.0206}
          y1={0.574225}
          x2={70.7329}
          y2={17.3204}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#62F4C0" />
          <Stop offset={0.25009} stopColor="#4FD7D7" />
          <Stop offset={0.54216} stopColor="#3EBCED" />
          <Stop offset={0.80165} stopColor="#34ACFA" />
          <Stop offset={1} stopColor="#30A6FF" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear"
          x1={76.1882}
          y1={2.79073}
          x2={71.5649}
          y2={15.1037}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#62F4C0" />
          <Stop offset={0.25009} stopColor="#4FD7D7" />
          <Stop offset={0.54216} stopColor="#3EBCED" />
          <Stop offset={0.80165} stopColor="#34ACFA" />
          <Stop offset={1} stopColor="#30A6FF" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear"
          x1={75.356}
          y1={5.00742}
          x2={72.3972}
          y2={12.8873}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#62F4C0" />
          <Stop offset={0.25009} stopColor="#4FD7D7" />
          <Stop offset={0.54216} stopColor="#3EBCED" />
          <Stop offset={0.80165} stopColor="#34ACFA" />
          <Stop offset={1} stopColor="#30A6FF" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear"
          x1={55.4033}
          y1={56.0408}
          x2={66.6491}
          y2={56.0408}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint7_linear"
          x1={81.4241}
          y1={56.9466}
          x2={92.6699}
          y2={56.9466}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint8_linear"
          x1={66.8231}
          y1={76.6749}
          x2={81.4083}
          y2={76.6749}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint9_linear"
          x1={18.6272}
          y1={51.3598}
          x2={9.72368}
          y2={40.8692}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint10_linear"
          x1={21.1413}
          y1={49.2511}
          x2={14.7968}
          y2={41.7757}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint11_linear"
          x1={130.404}
          y1={51.3598}
          x2={139.307}
          y2={40.8692}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint12_linear"
          x1={127.889}
          y1={49.2508}
          x2={134.234}
          y2={41.7754}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

function StarOff(props: SvgProps) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M29.9205 10.7685C29.727 10.2015 29.2155 9.801 28.6185 9.7545L20.067 9.075L16.3665 0.8835C16.125 0.345 15.5895 0 15 0C14.4105 0 13.875 0.345 13.6335 0.882L9.93303 9.075L1.38153 9.7545C0.795029 9.801 0.289529 10.1865 0.0900293 10.74C-0.109471 11.2935 0.0315294 11.913 0.453029 12.324L6.77253 18.4845L4.53753 28.1625C4.39953 28.761 4.64103 29.3835 5.14653 29.733C5.40453 29.91 5.70153 30 6.00003 30C6.28953 30 6.58053 29.916 6.83253 29.748L15 24.303L23.1675 29.748C23.6895 30.096 24.375 30.0825 24.885 29.712C25.392 29.3415 25.6155 28.692 25.443 28.089L22.6995 18.489L29.5035 12.366C29.949 11.964 30.1125 11.337 29.9205 10.7685Z"
        fill="#C9D4DB"
      />
    </Svg>
  );
}

function StarOn(props: SvgProps) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M29.9205 10.7685C29.727 10.2015 29.2155 9.801 28.6185 9.7545L20.067 9.075L16.3665 0.8835C16.125 0.345 15.5895 0 15 0C14.4105 0 13.875 0.345 13.6335 0.882L9.93303 9.075L1.38153 9.7545C0.795029 9.801 0.289529 10.1865 0.0900293 10.74C-0.109471 11.2935 0.0315294 11.913 0.453029 12.324L6.77253 18.4845L4.53753 28.1625C4.39953 28.761 4.64103 29.3835 5.14653 29.733C5.40453 29.91 5.70153 30 6.00003 30C6.28953 30 6.58053 29.916 6.83253 29.748L15 24.303L23.1675 29.748C23.6895 30.096 24.375 30.0825 24.885 29.712C25.392 29.3415 25.6155 28.692 25.443 28.089L22.6995 18.489L29.5035 12.366C29.949 11.964 30.1125 11.337 29.9205 10.7685Z"
        fill="#FECA14"
      />
    </Svg>
  );
}

export {IconClose, SwitzerlandFlag, GoodReview, StarOff, StarOn};
