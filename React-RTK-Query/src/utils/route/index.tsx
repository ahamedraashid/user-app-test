import { RouteObject } from 'react-router-dom';

import RouteWithFallbackBoundary from '@/components/RouteWithFallbackBoundary';

export const wrapRoutes = (routes: RouteObject[]): RouteObject[] =>
  routes.map((route) => {
    const { children, element } = route;

    // Wrap the element with your desired component
    const wrappedElement = element ? (
      <RouteWithFallbackBoundary>{element}</RouteWithFallbackBoundary>
    ) : undefined;

    // If the route has children, recursively wrap the children as well
    const wrappedChildren = children ? wrapRoutes(children) : undefined;

    // Return the updated route object with wrapped element and children
    return {
      ...route,
      element: wrappedElement,
      children: wrappedChildren,
      index: false,
    };
  });
