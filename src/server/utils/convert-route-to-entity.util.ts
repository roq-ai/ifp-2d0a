const mapping: Record<string, string> = {
  companies: 'company',
  sales: 'sale',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
