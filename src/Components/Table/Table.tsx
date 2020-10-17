import React, { useEffect } from "react";

/** Components */
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";

/** Contexts */
import useTableContext from "../../Contexts/Table/TableContextManager";

/** Styles */
import { TableWrapper } from "./styles";

const Table = () => {
  const {
    data: { tableData },
  } = useTableContext({});

  // useEffect(() => {
  //   console.log({ tableData });
  // }, [tableData]);

  return (
    <TableWrapper>
      <TableHeader />
      {tableData &&
        tableData.assets.length > 0 &&
        tableData.assets.map((row: any) => <TableRow key={row.id} {...row} />)}
      <TableFooter />
    </TableWrapper>
  );
};

export default Table;
