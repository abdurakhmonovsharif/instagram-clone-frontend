
import { Avatar } from "@material-tailwind/react"
import { Create_post_icon, Explore_icon, Home_icon, Home_seleted_icon, Messages_icon, Reels_icon, Like_icon, Search_icon, Settings_icon, Saved_icon, Moon_icon, Save_icon, Explore_selected_icon, Messages_selected_icon, Reels_selected_icon } from "../helpers/icons"
export const menu_categories = [
  { path: "/", iconSelected: <Home_seleted_icon />, icon: <Home_icon />, label: "Home" },
  { path: "/search", icon: <Search_icon />, label: "Search" },
  { path: "/explore", iconSelected: <Explore_selected_icon />, icon: <Explore_icon />, label: "Explore" },
  { path: "/reels", iconSelected: <Reels_selected_icon />, icon: <Reels_icon />, label: "Reels" },
  { path: "/direct/inbox/", iconSelected: <Messages_selected_icon />, icon: <Messages_icon />, label: "Messages" },
  { path: "/notifications", icon: <Like_icon />, label: "Notifications" },
  { path: "/create_post", icon: <Create_post_icon />, label: "Create" },
  { path: "/profile", icon: <Avatar src="https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/computer-user-icon.png" size="xs" alt="#404" />, label: "Profile" },
]

export const dropdown_items = [
  { path: "/settings", icon: <Settings_icon />, label: "Settings" },
  { path: "/saved", icon: <Save_icon />, label: "Saved" },
  { path: null, icon: <Moon_icon />, label: "Switch appearance" },
  { path: null, icon: null, label: "Log Out" },
];
