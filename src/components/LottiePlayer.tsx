'use client';

import Lottie from 'lottie-react';

type Props = {
  animationData: any;
  width?: number;
  height?: number;
};

export default function LottiePlayer({
  animationData,
  width = 200,
  height = 200,
}: Props) {
  return (
    <div style={{ width, height }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
