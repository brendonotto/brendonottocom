import { ReactNode } from "react";

type Props = {
  url: string;
  children?: ReactNode;
};

const ExternalLink = ({ url, children }: Props) => {
  return (
    <a
      className="font-medium text-green-900"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
