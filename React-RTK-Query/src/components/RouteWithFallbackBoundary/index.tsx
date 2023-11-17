import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallBack from './ErrorFallBack';
import { IRouteWithFallbackBoundaryProps } from './types';

const RouteWithFallbackBoundary = ({
  children,
}: IRouteWithFallbackBoundaryProps) => (
  <ErrorBoundary FallbackComponent={ErrorFallBack}>{children}</ErrorBoundary>
);

export default RouteWithFallbackBoundary;
