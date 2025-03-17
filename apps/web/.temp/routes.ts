import { lazy } from 'react';

export interface RouteConfig {
  path: string;
  label: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
}

export const routes: RouteConfig[] = [];

// This constant is used by our plugin to detect when to refresh the routes
// DO NOT REMOVE THIS LINE - it's used by the component-routes-plugin
const COMPONENT_ROUTES_MARKER = true;

// Use Vite's glob import to dynamically import all component files
const componentModules = import.meta.glob('./dessn-component-routes/*.tsx');

// Process each component and add it to routes
Object.keys(componentModules).forEach((modulePath) => {
  const componentId = modulePath.replace('./dessn-component-routes/', '').replace('.tsx', '');
  const componentName = componentId;
  
  routes.push({
    path: `/${componentId}`,
    label: componentName,
    component: lazy(() => componentModules[modulePath]()),
  });
});
