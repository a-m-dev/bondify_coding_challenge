import React from "react";

import { ErrorNotifContainer } from "./styles";
import { ApolloError } from "@apollo/client";

interface Props {
  error: ApolloError | undefined;
}

const ErrorNotif: React.FC<Props> = ({ error }) => {
  return error ? (
    <ErrorNotifContainer>
      {error.graphQLErrors.map(({ message }, i) => (
        <span key={i}>{message}</span>
      ))}
    </ErrorNotifContainer>
  ) : null;
};

export default ErrorNotif;
