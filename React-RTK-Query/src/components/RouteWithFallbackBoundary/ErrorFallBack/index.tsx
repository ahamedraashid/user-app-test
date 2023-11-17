import { IErrorFallBackProps } from './types';

const ErrorFallBack = ({ error, resetErrorBoundary }: IErrorFallBackProps) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

export default ErrorFallBack;
