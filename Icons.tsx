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

function NeutralReview(props: SvgProps) {
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
        d="M75.1987 128.845C105.132 128.845 129.397 104.579 129.397 74.6459C129.397 44.7128 105.132 20.4473 75.1987 20.4473C45.2656 20.4473 21 44.7128 21 74.6459C21 104.579 45.2656 128.845 75.1987 128.845Z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M75.1987 126.125C103.63 126.125 126.677 103.077 126.677 74.646C126.677 46.2152 103.63 23.1675 75.1987 23.1675C46.7679 23.1675 23.7202 46.2152 23.7202 74.646C23.7202 103.077 46.7679 126.125 75.1987 126.125Z"
        fill="url(#paint1_linear)"
      />
      <Path
        d="M75.1987 13.1502C77.5226 13.1502 79.4065 11.2663 79.4065 8.94239C79.4065 6.61851 77.5226 4.73462 75.1987 4.73462C72.8749 4.73462 70.991 6.61851 70.991 8.94239C70.991 11.2663 72.8749 13.1502 75.1987 13.1502Z"
        fill="url(#paint2_linear)"
      />
      <Path
        opacity={0.05}
        d="M75.1987 17.8847C80.1374 17.8847 84.141 13.8811 84.141 8.94235C84.141 4.00363 80.1374 0 75.1987 0C70.26 0 66.2563 4.00363 66.2563 8.94235C66.2563 13.8811 70.26 17.8847 75.1987 17.8847Z"
        fill="url(#paint3_linear)"
      />
      <Path
        opacity={0.175}
        d="M75.1986 15.5175C78.8299 15.5175 81.7737 12.5738 81.7737 8.94249C81.7737 5.31119 78.8299 2.36743 75.1986 2.36743C71.5673 2.36743 68.6235 5.31119 68.6235 8.94249C68.6235 12.5738 71.5673 15.5175 75.1986 15.5175Z"
        fill="url(#paint4_linear)"
      />
      <Path
        opacity={0.3}
        d="M75.1987 13.1502C77.5226 13.1502 79.4065 11.2663 79.4065 8.94239C79.4065 6.61851 77.5226 4.73462 75.1987 4.73462C72.8749 4.73462 70.991 6.61851 70.991 8.94239C70.991 11.2663 72.8749 13.1502 75.1987 13.1502Z"
        fill="url(#paint5_linear)"
      />
      <Path
        d="M109.91 107.081C112.611 106.287 115.904 109.364 116.441 112.883C116.818 115.347 115.607 119.748 112.455 120.675C110.683 121.196 108.782 121.755 108.089 116.733C107.31 111.078 107.544 107.777 109.91 107.081Z"
        fill="url(#paint6_linear)"
      />
      <Path
        d="M107.347 118.035C108.342 117.742 109.052 116.875 108.933 116.097C108.451 112.936 108.808 110.758 110.823 109.679C111.747 109.184 112.182 108.242 111.794 107.575C111.407 106.908 110.344 106.767 109.42 107.263C105.069 109.593 104.793 113.631 105.331 117.156C105.45 117.934 106.352 118.327 107.347 118.035Z"
        fill="url(#paint7_linear)"
      />
      <Path
        d="M39.8679 107.081C37.0525 107.016 34.6714 110.842 35.0662 114.38C35.3425 116.857 37.6536 120.793 40.9382 120.87C42.7849 120.913 44.7661 120.959 44.131 115.929C43.416 110.266 42.3328 107.139 39.8679 107.081Z"
        fill="url(#paint8_linear)"
      />
      <Path
        d="M45.1859 116.994C44.1494 116.97 43.2383 116.316 43.1511 115.535C42.7966 112.357 41.8862 110.346 39.6599 109.827C38.6393 109.589 37.9748 108.792 38.1757 108.047C38.3767 107.302 39.3661 106.891 40.3877 107.129C45.1949 108.25 46.5095 112.078 46.9049 115.622C46.9921 116.404 46.2224 117.018 45.1859 116.994Z"
        fill="url(#paint9_linear)"
      />
      <Path
        d="M67.8231 84.3621C68.0683 89.5724 72.8899 91.2413 75.8755 91.1009C78.8615 90.9604 83.3754 89.2326 83.1302 84.0223C82.9159 79.4676 80.3299 82.9923 75.6482 83.2126C71.302 83.4171 67.6178 79.9971 67.8231 84.3621Z"
        fill="url(#paint10_linear)"
      />
      <Path
        d="M60.5436 69.5486C63.7786 69.5486 66.4012 66.9198 66.4012 63.6774C66.4012 60.4349 63.7786 57.8062 60.5436 57.8062C57.3085 57.8062 54.686 60.4349 54.686 63.6774C54.686 66.9198 57.3085 69.5486 60.5436 69.5486Z"
        fill="url(#paint11_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.0741 60.1943C61.3164 59.9916 62.6359 60.3943 63.5584 61.387L63.0281 62.2036L59.9924 61.1647L60.0741 60.1943ZM63.9725 62.9927C64.2461 62.948 64.5041 63.1336 64.5488 63.4072C64.5861 63.6356 64.603 63.8666 64.5994 64.0971C64.5951 64.3743 64.3669 64.5956 64.0897 64.5913C63.8125 64.587 63.5913 64.3589 63.5956 64.0817C63.5982 63.9103 63.5857 63.7387 63.5579 63.569C63.5133 63.2954 63.6989 63.0373 63.9725 62.9927Z"
        fill="white"
      />
      <Path
        d="M90.1482 69.5486C93.3831 69.5486 96.0058 66.9198 96.0058 63.6774C96.0058 60.4349 93.3831 57.8062 90.1482 57.8062C86.9132 57.8062 84.2905 60.4349 84.2905 63.6774C84.2905 66.9198 86.9132 69.5486 90.1482 69.5486Z"
        fill="url(#paint12_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M89.0312 60.0751C90.2455 59.7431 91.6002 60.0056 92.6215 60.8965L92.1796 61.7641L89.0517 61.0486L89.0312 60.0751ZM93.2012 62.4501C93.4686 62.377 93.7446 62.5346 93.8177 62.802C93.8787 63.025 93.9198 63.2532 93.9402 63.4834C93.9647 63.7596 93.7606 64.0033 93.4845 64.0277C93.2083 64.0522 92.9646 63.8481 92.9402 63.572C92.9251 63.4019 92.8946 63.2326 92.8493 63.0667C92.7762 62.7992 92.9337 62.5232 93.2012 62.4501Z"
        fill="white"
      />
      <Path
        opacity={0.1}
        d="M75.3457 150C86.9507 150 96.3584 148.824 96.3584 147.373C96.3584 145.922 86.9507 144.746 75.3457 144.746C63.7407 144.746 54.333 145.922 54.333 147.373C54.333 148.824 63.7407 150 75.3457 150Z"
        fill="black"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={80.3283}
          y1={20.6787}
          x2={70.0414}
          y2={128.587}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EBF6FF" />
          <Stop offset={0.46178} stopColor="#E9F5FF" />
          <Stop offset={0.68927} stopColor="#E1F2FF" />
          <Stop offset={0.86503} stopColor="#D4ECFF" />
          <Stop offset={0.99811} stopColor="#C4E5FF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={66.7609}
          y1={23.867}
          x2={83.6119}
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
          x1={76.6656}
          y1={5.00773}
          x2={73.707}
          y2={12.8876}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#62F4C0" />
          <Stop offset={0.25009} stopColor="#4FD7D7" />
          <Stop offset={0.54216} stopColor="#3EBCED" />
          <Stop offset={0.80165} stopColor="#34ACFA" />
          <Stop offset={1} stopColor="#30A6FF" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1={78.3302}
          y1={0.574465}
          x2={72.0423}
          y2={17.3207}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#62F4C0" />
          <Stop offset={0.25009} stopColor="#4FD7D7" />
          <Stop offset={0.54216} stopColor="#3EBCED" />
          <Stop offset={0.80165} stopColor="#34ACFA" />
          <Stop offset={1} stopColor="#30A6FF" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear"
          x1={77.4978}
          y1={2.79122}
          x2={72.8745}
          y2={15.1042}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#62F4C0" />
          <Stop offset={0.25009} stopColor="#4FD7D7" />
          <Stop offset={0.54216} stopColor="#3EBCED" />
          <Stop offset={0.80165} stopColor="#34ACFA" />
          <Stop offset={1} stopColor="#30A6FF" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear"
          x1={76.6656}
          y1={5.00773}
          x2={73.707}
          y2={12.8876}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#62F4C0" />
          <Stop offset={0.25009} stopColor="#4FD7D7" />
          <Stop offset={0.54216} stopColor="#3EBCED" />
          <Stop offset={0.80165} stopColor="#34ACFA" />
          <Stop offset={1} stopColor="#30A6FF" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear"
          x1={111.055}
          y1={106.732}
          x2={114.936}
          y2={119.933}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint7_linear"
          x1={107.901}
          y1={107.64}
          x2={110.667}
          y2={117.047}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint8_linear"
          x1={38.6789}
          y1={107.094}
          x2={38.3578}
          y2={120.85}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint9_linear"
          x1={41.9604}
          y1={107.152}
          x2={41.7316}
          y2={116.954}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint10_linear"
          x1={72.0577}
          y1={79.7323}
          x2={79.5607}
          y2={90.2863}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint11_linear"
          x1={54.686}
          y1={63.6774}
          x2={66.4012}
          y2={63.6774}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2E4866" stopOpacity={0.8} />
          <Stop offset={1} stopColor="#2E4866" />
        </LinearGradient>
        <LinearGradient
          id="paint12_linear"
          x1={84.2905}
          y1={63.6774}
          x2={96.0058}
          y2={63.6774}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2E4866" stopOpacity={0.8} />
          <Stop offset={1} stopColor="#2E4866" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

function BadReview(props: SvgProps) {
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
        d="M75.1987 128.845C105.132 128.845 129.397 104.579 129.397 74.6459C129.397 44.7128 105.132 20.4473 75.1987 20.4473C45.2656 20.4473 21 44.7128 21 74.6459C21 104.579 45.2656 128.845 75.1987 128.845Z"
        fill="url(#paint0_linear)"
      />
      <Path
        d="M75.1987 126.125C103.63 126.125 126.677 103.077 126.677 74.646C126.677 46.2152 103.63 23.1675 75.1987 23.1675C46.7679 23.1675 23.7202 46.2152 23.7202 74.646C23.7202 103.077 46.7679 126.125 75.1987 126.125Z"
        fill="url(#paint1_linear)"
      />
      <Path
        d="M75.1987 13.1502C77.5226 13.1502 79.4065 11.2663 79.4065 8.94239C79.4065 6.61851 77.5226 4.73462 75.1987 4.73462C72.8749 4.73462 70.991 6.61851 70.991 8.94239C70.991 11.2663 72.8749 13.1502 75.1987 13.1502Z"
        fill="url(#paint2_linear)"
      />
      <Path
        opacity={0.05}
        d="M75.1987 17.8847C80.1374 17.8847 84.141 13.8811 84.141 8.94235C84.141 4.00363 80.1374 0 75.1987 0C70.26 0 66.2563 4.00363 66.2563 8.94235C66.2563 13.8811 70.26 17.8847 75.1987 17.8847Z"
        fill="url(#paint3_linear)"
      />
      <Path
        opacity={0.175}
        d="M75.1986 15.5175C78.8299 15.5175 81.7737 12.5738 81.7737 8.94249C81.7737 5.31119 78.8299 2.36743 75.1986 2.36743C71.5673 2.36743 68.6235 5.31119 68.6235 8.94249C68.6235 12.5738 71.5673 15.5175 75.1986 15.5175Z"
        fill="url(#paint4_linear)"
      />
      <Path
        opacity={0.3}
        d="M75.1987 13.1502C77.5226 13.1502 79.4065 11.2663 79.4065 8.94239C79.4065 6.61851 77.5226 4.73462 75.1987 4.73462C72.8749 4.73462 70.991 6.61851 70.991 8.94239C70.991 11.2663 72.8749 13.1502 75.1987 13.1502Z"
        fill="url(#paint5_linear)"
      />
      <Path
        d="M49.2711 112.815C46.5067 113.352 44.9983 117.599 46.1401 120.971C46.9393 123.332 50.0381 126.683 53.2632 126.056C55.0765 125.703 57.0217 125.325 55.3265 120.547C53.4179 115.168 51.6913 112.344 49.2711 112.815Z"
        fill="url(#paint6_linear)"
      />
      <Path
        d="M56.5844 121.362C55.5667 121.56 54.537 121.116 54.2848 120.372C53.2592 117.343 51.9403 115.573 49.6544 115.541C48.6066 115.527 47.7871 114.891 47.8242 114.12C47.8613 113.349 48.7399 112.736 49.789 112.751C54.7246 112.819 56.8268 116.277 57.9706 119.655C58.2228 120.4 57.6021 121.164 56.5844 121.362Z"
        fill="url(#paint7_linear)"
      />
      <Path
        d="M98.3473 112.815C101.112 113.352 102.62 117.599 101.478 120.971C100.679 123.332 97.5802 126.683 94.3551 126.056C92.5419 125.703 90.5966 125.325 92.2918 120.547C94.2005 115.168 95.9271 112.344 98.3473 112.815Z"
        fill="url(#paint8_linear)"
      />
      <Path
        d="M91.0339 121.362C92.0517 121.56 93.0813 121.116 93.3335 120.372C94.3591 117.343 95.6781 115.573 97.9639 115.541C99.0118 115.527 99.8312 114.891 99.7941 114.12C99.757 113.349 98.8784 112.736 97.8293 112.751C92.8937 112.819 90.7915 116.277 89.6477 119.655C89.3955 120.4 90.0162 121.164 91.0339 121.362Z"
        fill="url(#paint9_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M90.2166 52.2781C90.2273 51.8635 90.5717 51.5361 90.9858 51.5469L90.9664 52.2976C90.9858 51.5469 90.9861 51.5469 90.9863 51.5469L90.9887 51.547L90.9939 51.5471L91.0113 51.5477C91.0259 51.5482 91.0466 51.549 91.073 51.5502C91.1259 51.5526 91.2017 51.5565 91.2979 51.5628C91.4903 51.5755 91.7648 51.5977 92.101 51.6365C92.7721 51.714 93.6959 51.858 94.7062 52.1254C96.6949 52.6516 99.1682 53.6947 100.604 55.801C100.837 56.1436 100.749 56.6108 100.407 56.8446C100.065 57.0784 99.5984 56.9902 99.3649 56.6477C98.2385 54.9952 96.2028 54.0749 94.3229 53.5775C93.399 53.333 92.5487 53.2001 91.9292 53.1286C91.6202 53.0929 91.3703 53.0728 91.1996 53.0615C91.1143 53.0559 91.0489 53.0526 91.0059 53.0506C90.9844 53.0497 90.9686 53.0491 90.9586 53.0487L90.9482 53.0484L90.9469 53.0483L90.9465 53.0483C90.5326 53.0374 90.2058 52.6926 90.2166 52.2781Z"
        fill="url(#paint10_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.3579 52.3045C60.3471 51.8899 60.0027 51.5625 59.5886 51.5733L59.6081 52.324C59.5886 51.5733 59.5884 51.5733 59.5881 51.5733L59.5858 51.5733L59.5806 51.5735L59.5632 51.5741C59.5485 51.5746 59.5279 51.5754 59.5014 51.5766C59.4486 51.5789 59.3728 51.5828 59.2766 51.5892C59.0842 51.6018 58.8097 51.6241 58.4734 51.6629C57.8024 51.7404 56.8786 51.8844 55.8682 52.1517C53.8796 52.678 51.4063 53.7211 49.9706 55.8274C49.7371 56.1699 49.8251 56.6372 50.1673 56.871C50.5094 57.1048 50.9761 57.0166 51.2096 56.674C52.336 55.0215 54.3717 54.1013 56.2515 53.6038C57.1754 53.3594 58.0257 53.2265 58.6452 53.155C58.9543 53.1193 59.2041 53.0991 59.3748 53.0879C59.4601 53.0823 59.5255 53.0789 59.5685 53.077C59.59 53.076 59.6059 53.0754 59.6158 53.0751L59.6263 53.0747L59.6276 53.0747L59.6279 53.0747C60.0419 53.0637 60.3687 52.719 60.3579 52.3045Z"
        fill="url(#paint11_linear)"
      />
      <Path
        d="M84.2021 87.8718C83.9185 81.8433 78.3397 79.9123 74.8852 80.0748C71.4304 80.2373 66.2077 82.2364 66.4913 88.2649C66.7393 93.5349 69.7314 89.4567 75.1483 89.2018C80.177 88.9652 84.4398 92.9222 84.2021 87.8718Z"
        fill="url(#paint12_linear)"
      />
      <Path
        d="M60.5433 69.5486C63.7783 69.5486 66.4009 66.9198 66.4009 63.6774C66.4009 60.4349 63.7783 57.8062 60.5433 57.8062C57.3083 57.8062 54.6858 60.4349 54.6858 63.6774C54.6858 66.9198 57.3083 69.5486 60.5433 69.5486Z"
        fill="url(#paint13_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.0741 60.1943C61.3164 59.9916 62.6359 60.3943 63.5584 61.387L63.0281 62.2036L59.9924 61.1647L60.0741 60.1943ZM63.9725 62.9927C64.2461 62.948 64.5041 63.1336 64.5488 63.4072C64.5861 63.6356 64.603 63.8666 64.5994 64.0971C64.5951 64.3743 64.3669 64.5956 64.0897 64.5913C63.8125 64.587 63.5913 64.3589 63.5956 64.0817C63.5982 63.9103 63.5857 63.7387 63.5579 63.569C63.5133 63.2954 63.6989 63.0373 63.9725 62.9927Z"
        fill="white"
      />
      <Path
        d="M90.1482 69.5486C93.3831 69.5486 96.0058 66.9198 96.0058 63.6774C96.0058 60.4349 93.3831 57.8062 90.1482 57.8062C86.9132 57.8062 84.2905 60.4349 84.2905 63.6774C84.2905 66.9198 86.9132 69.5486 90.1482 69.5486Z"
        fill="url(#paint14_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M89.0312 60.0751C90.2455 59.7431 91.6002 60.0056 92.6215 60.8965L92.1796 61.7641L89.0517 61.0486L89.0312 60.0751ZM93.2012 62.4501C93.4686 62.377 93.7446 62.5346 93.8177 62.802C93.8787 63.025 93.9198 63.2532 93.9402 63.4834C93.9647 63.7596 93.7606 64.0033 93.4845 64.0277C93.2083 64.0522 92.9646 63.8481 92.9402 63.572C92.9251 63.4019 92.8946 63.2326 92.8493 63.0667C92.7762 62.7992 92.9337 62.5232 93.2012 62.4501Z"
        fill="white"
      />
      <G opacity={0.7}>
        <Path
          opacity={0.7}
          d="M59.8762 70.2756C59.8762 70.2756 56.1093 75.086 56.1086 78.6517C56.1082 80.9616 57.7955 82.4193 59.8762 82.4193C61.957 82.4193 63.6442 80.9616 63.6438 78.6517C63.6431 75.086 59.8762 70.2756 59.8762 70.2756Z"
          fill="#B0DCFF"
        />
        <G opacity={0.05}>
          <Path
            opacity={0.05}
            d="M60.1633 70.6599C61.1749 72.6005 62.2757 75.2172 62.2761 77.4196C62.2765 80.0588 60.5893 81.7243 58.5085 81.7243C58.1146 81.7243 57.7349 81.6644 57.3779 81.5496C58.0429 82.1092 58.9175 82.4193 59.8761 82.4193C61.9569 82.4193 63.6441 80.9616 63.6437 78.6517C63.6431 75.6875 61.0417 71.8659 60.1633 70.6599Z"
            fill="black"
          />
        </G>
        <Path
          opacity={0.7}
          d="M57.378 80.0655C57.7854 80.0655 58.1157 79.4794 58.1157 78.7565C58.1157 78.0336 57.7854 77.4475 57.378 77.4475C56.9706 77.4475 56.6404 78.0336 56.6404 78.7565C56.6404 79.4794 56.9706 80.0655 57.378 80.0655Z"
          fill="white"
        />
      </G>
      <Path
        opacity={0.1}
        d="M75.3457 150C86.9507 150 96.3584 148.824 96.3584 147.373C96.3584 145.922 86.9507 144.746 75.3457 144.746C63.7407 144.746 54.333 145.922 54.333 147.373C54.333 148.824 63.7407 150 75.3457 150Z"
        fill="black"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={80.3285}
          y1={20.6786}
          x2={70.0415}
          y2={128.587}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EBF6FF" />
          <Stop offset={0.46178} stopColor="#E9F5FF" />
          <Stop offset={0.68927} stopColor="#E1F2FF" />
          <Stop offset={0.86503} stopColor="#D4ECFF" />
          <Stop offset={0.99811} stopColor="#C4E5FF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear"
          x1={66.761}
          y1={23.8673}
          x2={83.612}
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
          x1={76.6658}
          y1={5.00801}
          x2={73.7071}
          y2={12.8878}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#62F4C0" />
          <Stop offset={0.25009} stopColor="#4FD7D7" />
          <Stop offset={0.54216} stopColor="#3EBCED" />
          <Stop offset={0.80165} stopColor="#34ACFA" />
          <Stop offset={1} stopColor="#30A6FF" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear"
          x1={78.3304}
          y1={0.574752}
          x2={72.0424}
          y2={17.321}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#62F4C0" />
          <Stop offset={0.25009} stopColor="#4FD7D7" />
          <Stop offset={0.54216} stopColor="#3EBCED" />
          <Stop offset={0.80165} stopColor="#34ACFA" />
          <Stop offset={1} stopColor="#30A6FF" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear"
          x1={77.4979}
          y1={2.79151}
          x2={72.8747}
          y2={15.1045}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#62F4C0" />
          <Stop offset={0.25009} stopColor="#4FD7D7" />
          <Stop offset={0.54216} stopColor="#3EBCED" />
          <Stop offset={0.80165} stopColor="#34ACFA" />
          <Stop offset={1} stopColor="#30A6FF" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear"
          x1={76.6658}
          y1={5.00801}
          x2={73.7071}
          y2={12.8878}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#62F4C0" />
          <Stop offset={0.25009} stopColor="#4FD7D7" />
          <Stop offset={0.54216} stopColor="#3EBCED" />
          <Stop offset={0.80165} stopColor="#34ACFA" />
          <Stop offset={1} stopColor="#30A6FF" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear"
          x1={48.138}
          y1={113.053}
          x2={50.7639}
          y2={126.56}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint7_linear"
          x1={51.3555}
          y1={112.408}
          x2={53.2267}
          y2={122.033}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint8_linear"
          x1={99.4801}
          y1={113.054}
          x2={96.8542}
          y2={126.56}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint9_linear"
          x1={96.2626}
          y1={112.409}
          x2={94.3914}
          y2={122.033}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint10_linear"
          x1={90.1406}
          y1={52.4452}
          x2={100.945}
          y2={55.6128}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2E4866" stopOpacity={0.8} />
          <Stop offset={1} stopColor="#2E4866" />
        </LinearGradient>
        <LinearGradient
          id="paint11_linear"
          x1={60.4339}
          y1={52.4715}
          x2={49.63}
          y2={55.6391}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2E4866" stopOpacity={0.8} />
          <Stop offset={1} stopColor="#2E4866" />
        </LinearGradient>
        <LinearGradient
          id="paint12_linear"
          x1={79.3032}
          y1={93.2292}
          x2={70.6219}
          y2={81.0179}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#355673" />
          <Stop offset={0.41782} stopColor="#345470" />
          <Stop offset={0.66908} stopColor="#304D68" />
          <Stop offset={0.87559} stopColor="#29415A" />
          <Stop offset={1} stopColor="#23364D" />
        </LinearGradient>
        <LinearGradient
          id="paint13_linear"
          x1={54.6858}
          y1={63.6774}
          x2={66.4009}
          y2={63.6774}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2E4866" stopOpacity={0.8} />
          <Stop offset={1} stopColor="#2E4866" />
        </LinearGradient>
        <LinearGradient
          id="paint14_linear"
          x1={84.2905}
          y1={63.6774}
          x2={96.0058}
          y2={63.6774}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#2E4866" stopOpacity={0.8} />
          <Stop offset={1} stopColor="#2E4866" />
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

export {
  IconClose,
  SwitzerlandFlag,
  GoodReview,
  StarOff,
  StarOn,
  BadReview,
  NeutralReview,
};
