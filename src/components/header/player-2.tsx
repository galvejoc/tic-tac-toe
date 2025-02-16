import { iconsReturn } from "@/function";
import { playerInterface } from "@/interface";
import { FaPencilAlt, FaRobot } from "react-icons/fa";

export function Player2({ name, icon, autoplayer, color, playPlayer }: playerInterface) {
  return (
    <div className="block rounded-xl md:px-3 px-1" style={{boxShadow: playPlayer === 2 ? 'inset -0px -12px 12px rgba(125, 166, 232, 0.5)' : 'none',}}>
      <div className="flex justify-center items-center">
        <span className="mr-3 md:text-2xl text-xl" style={{ color: color }}>{iconsReturn(icon)}</span>
        <span className="md:text-2xl text-xl" style={{ color: color }}>{name}</span>
      </div>
      <div >
        <span className="flex justify-start mb-2" >
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
