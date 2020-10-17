import React from "react";

import { TableFooterWrapper, Descriptor, Navigators } from "./styles";

const TableFooter = () => {
  return (
    <TableFooterWrapper>
      <Descriptor>View</Descriptor>
      <Navigators to="/?vol=25">25</Navigators>
      <Navigators to="/?vol=50">50</Navigators>
      <Navigators to="/?showAllData=true">All</Navigators>
    </TableFooterWrapper>
  );
};

export default TableFooter;
