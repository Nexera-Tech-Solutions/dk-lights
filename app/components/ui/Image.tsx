import React, { forwardRef } from "react";

type ImageProps = {
  src: any;
  alt: string;
  transform?: string;
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, transform, className, ...props }, ref) => {
    const transformedSrc = transform
      ? `${src}${transform ? `?${transform}` : ""}`
      : src.src;

    console.log("src", src);

    return (
      <img
        src={transformedSrc}
        alt={alt}
        className={className}
        loading="lazy"
        ref={ref}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

export default Image;
