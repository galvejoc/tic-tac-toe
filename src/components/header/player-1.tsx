import { playerInterface } from "@/interface";

export function Player1({ name, icon, autoplayer, color }: playerInterface) {
  return (
    <div className="block">
      <div className="">
        <span className="mr-3 my-auto text-2xl" style={{color: color}}>{name}</span>
        <span className="text-2xl" style={{color: color}}>{icon}</span>
      </div>
      <div >
        <span className="flex justify-end" >
          {autoplayer === true ?
            'Auto' : "Manual"}
        </span>
      </div>
    </div>
  )
}
