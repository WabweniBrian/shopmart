import { BsCurrencyDollar } from "react-icons/bs";
import { FaHandshake, FaShare } from "react-icons/fa";
import {
  FiHome,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiSettings,
  FiShoppingBag,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";

export const links = [
  {
    name: "Dashboard",
    icon: <FiHome />,
    url: "/",
  },
  {
    name: "Products",
    icon: <FiShoppingBag />,
    subLinks: [
      {
        name: "All Products",
        url: "/products",
      },
      {
        name: "Add Product",
        url: "/products/add",
      },
      {
        name: "Product Category",
        url: "/products/categories",
      },
    ],
  },
  {
    name: "Customers",
    icon: <FiUsers />,
    url: "/customers",
  },
  {
    name: "Sales",
    icon: <BsCurrencyDollar />,
    subLinks: [
      {
        name: "Sales Analytics",
        url: "/sales/analysis",
      },
      {
        name: "Product Sales",
        url: "/sales",
      },
    ],
  },
  {
    name: "Orders",
    icon: <FiShoppingCart />,
    subLinks: [
      {
        name: "All Orders",
        url: "/orders",
      },
      {
        name: "Order Template",
        url: "/orders/template",
      },
    ],
  },
  {
    name: "Suppliers",
    icon: <FaShare />,
    url: "/suppliers",
  },
  {
    name: "Transactions",
    icon: <FaHandshake />,
    url: "/transactions",
  },
  {
    name: "Brands",
    icon: <FiLayers />,
    url: "/brands",
  },
  {
    name: "Reviews",
    icon: <FiMessageCircle />,
    url: "/reviews",
  },
  {
    name: "Settings",
    icon: <FiSettings />,
    url: "/settings",
  },
  {
    name: "Inbox",
    icon: <FiMail />,
    url: "/inbox",
  },
];
