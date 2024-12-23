import { arrayIcons } from "@/constants";

export function iconsReturn(id: number) {
  const iconObject = arrayIcons.find(icon => icon.id === id);
  return iconObject ? iconObject.component : undefined;
} 