"use client";

import Image, { type ImageProps } from "next/image";
import { useMemo, useState } from "react";

type SafeImageProps = Omit<ImageProps, "src"> & {
  src: string;
  fallbackSrc?: string;
};

export default function SafeImage({
  src,
  fallbackSrc = "/images/luxury-placeholder.svg",
  alt,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = useMemo(() => (hasError ? fallbackSrc : src), [fallbackSrc, hasError, src]);

  return <Image {...props} src={resolvedSrc} alt={alt} onError={() => setHasError(true)} />;
}
