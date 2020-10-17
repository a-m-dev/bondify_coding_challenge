import React from "react";
import { LoadingWrapper, LoadingIndicator } from "./styles";

interface Props {
  status: boolean;
}

const Loading: React.FC<Props> = ({ status }) => {
  return (
    <LoadingWrapper status={status}>
      <LoadingIndicator />
    </LoadingWrapper>
  );
};

export default Loading;
