import { iconsReturn } from "@/function";
import { playerInterface } from "@/interface";
import { FaPencilAlt, FaRobot } from "react-icons/fa";

export function Player1({ name, icon, autoplayer, color }: playerInterface) {
  return (
    <div className="block">
      <div className="flex justify-center items-center">
        <span className="mr-3 text-2xl" style={{ color: color }}>{name}</span>
        <span className="text-2xl" style={{ color: color }}>{iconsReturn(icon)}</span>
      </div>
      <div >
        <span className="flex justify-end" >
          {autoplayer ? (
            <FaRobot style={{color: color}} className="mx-auto"/>
          ) : (
            <FaPencilAlt style={{color: color}} className="mx-auto"/>
          )}
        </span>
      </div>
    </div>
  )
}
