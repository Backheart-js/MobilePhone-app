const routerConfig = {
  home: "/",
  category: "/:catalog?brand=:brand",
  // eslint-disable-next-line no-dupe-keys
  category: "/:catalog",
  detail: "/:catalog/:id",
  cart: "/cart",
  events: "/events/:events",
  search: "/search/q=:keyword",
  admin: "/admin",
  adminAdd: "/admin/add",
  adminLogin: "/admin/login",
}

export default routerConfig