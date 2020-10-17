import { useQuery } from "@apollo/client";
import queryString from "query-string";
import { GET_MARKET } from "./gqlQueries";
import { RouteProps } from "react-router-dom";

const useTableContext = (props: any) => {
  const { loading, error, data } = useQuery(GET_MARKET);

  console.log({ search: queryString.parse(props.location?.search) });

  return {
    data: {
      tableData: data,
      tableDataError: error,
      tableDataLoading: loading,
    },
    actions: {},
  };
};

export default useTableContext;
