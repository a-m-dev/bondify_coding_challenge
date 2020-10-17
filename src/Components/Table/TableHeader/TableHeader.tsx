import React, { useMemo } from "react";
import { HeadingWrapper, ColumnNotation } from "./styles";

const TableHeader = () => {
  const columns = useMemo(() => {
    return ["Name", "Pair", "Market Cap", "Average Last Price"];
  }, []);

  return (
    <HeadingWrapper>
      {columns.map((clmn, i) => (
        <ColumnNotation key={i}>{clmn}</ColumnNotation>
      ))}
    </HeadingWrapper>
  );
};

export default TableHeader;
