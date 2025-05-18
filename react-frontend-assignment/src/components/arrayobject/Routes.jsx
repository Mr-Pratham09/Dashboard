import {
  FiHome,
  FiUsers,
  FiSettings,
  FiFileText,
  FiEdit3,
  FiCreditCard,
  FiHelpCircle,
  FiInfo
} from "react-icons/fi"


export const routes = [
  {
    label: "Dashboard",
    path: "/",
    icon: <FiHome className="text-xl" />
  },
  {
    label: "Users",
    path: "/users",
    icon: <FiUsers className="text-xl" />
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <FiSettings className="text-xl" />
  },
  {
    label: "Article",
    path: "/article",
    icon: <FiFileText className="text-xl" />
  },
  {
    label: "Auto Blog",
    path: "/auto-blog",
    icon: <FiEdit3 className="text-xl" />
  },
  {
    label: "Subscription",
    path: "/subscription",
    icon: <FiCreditCard className="text-xl" />
  },
  {
    label: "Help",
    path: "/help",
    icon: <FiHelpCircle className="text-xl" />
  },
  {
    label: "About",
    path: "/about",
    icon: <FiInfo className="text-xl" />
  }
]