import { createContext, useContext } from "react";

export const TableContext = createContext();

const useTableContext = () => useContext(TableContext);

export default useTableContext;
