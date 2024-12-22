import { playerInterface } from "@/interface";

export function Player2({ name, icon, autoplayer, color }: playerInterface) {
  return (
    <div className="block">
      <div className="">
        <span className="mr-3 text-2xl" style={{color: color}}>{icon}</span>
        <span className="my-auto text-2xl" style={{color: color}}>{name}</span>
      </div>
      <div >
        <span className="flex justify-start" >
          {autoplayer === true ?
            'Auto' : "Manual"}
        </span>
      </div>
    </div>
  )
}
