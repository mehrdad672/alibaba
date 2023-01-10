import Link from "next/link";
import React, { ReactComponentElement } from "react";
import { JsxElement } from "typescript";

type Props = {
  title: string;
  icon?: JsxElement;
};

const SearchTab = ({ title, icon }: Props) => {
  return (
    <Link href="">
      <>
        <span>{title}</span>
        {icon}
      </>
    </Link>
  );
};

export default SearchTab;
