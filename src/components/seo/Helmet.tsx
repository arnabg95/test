import React from "react";
import { Helmet } from "react-helmet-async";

export default function HelmetHeader({
  title,
}: {
  title: string;
}): React.ReactNode {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
