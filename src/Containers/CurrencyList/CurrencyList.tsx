import React from "react";

import Table from "../../Components/Table";
import Loading from "../../Components/Loading";
import ErrorNotif from "../../Components/ErrorNotif";

import { TableContext } from "../../Contexts/Table/TableContext";
import useTableContext from "../../Contexts/Table/TableContextManager";

import { CurrencyListWrapper } from "./styles";

const CurrencyList: React.FC = (props) => {
  const {
    data: { tableDataLoading, tableDataError, tableData },
  } = useTableContext(props);

  return (
    <CurrencyListWrapper>
      <Loading status={tableDataLoading} />
      <ErrorNotif error={tableDataError} />

      <TableContext.Provider value={{ data: tableData }}>
        <Table />
      </TableContext.Provider>
    </CurrencyListWrapper>
  );
};

export default CurrencyList;
