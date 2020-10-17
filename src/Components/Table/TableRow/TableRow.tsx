import React, { useMemo } from "react";
import { TableRowContainer, Cell } from "./styles";

interface Ticker {
  __typename: string;
  lastPrice: number;
}

interface Market {
  __typename: string;
  ticker: Ticker | null;
}

interface Props {
  id: string;
  assetName: string;
  assetSymbol: string;
  marketCap: string;
  __typename: string;
  markets: Market[];
}

const TableRow: React.FC<Props> = ({
  assetName,
  assetSymbol,
  marketCap,
  markets,
}) => {
  const AvgLastPrice = useMemo(() => {
    const tickersSum = markets
      .map((market) => {
        if (market.hasOwnProperty("ticker")) return market.ticker?.lastPrice;
      })
      .filter((price) => price !== undefined)
      .map((el) => Number(el))
      .reduce((acc, curr) => acc + curr, 0);

    return tickersSum / markets.length;
  }, [markets]);

  return (
    <TableRowContainer>
      <Cell>{assetName}</Cell>
      <Cell>{assetSymbol}</Cell>
      <Cell>${Number(marketCap).toLocaleString()}</Cell>
      <Cell>${Number(AvgLastPrice.toFixed(2)).toLocaleString()}</Cell>
    </TableRowContainer>
  );
};

export default TableRow;
