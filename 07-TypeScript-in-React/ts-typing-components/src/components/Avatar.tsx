// components/Avatar.tsx
// This component should receive `url` (string) and `altText` (string)
import type { ComponentProps } from "react";

const Avatar = ({
  url,
  altText,
  ...props
}: {
  url: string;
  altText: string;
} & ComponentProps<"img">) => {
  return <img src={url} alt={altText} {...props} />;
};

export default Avatar;
