import { Calendar, MapPin } from "lucide-react"

const TimeLine = ({ startDate, endDate }: {startDate:string,endDate:string,}) => {
    return (
        <div className=" flex gap-4">
            <div className=" flex gap-1 items-center">
                <Calendar className=" h-3 w-3" /> <p className=" text-xs">{startDate} - {endDate}</p>
            </div>
            <div className=" flex gap-1 items-center">
                <MapPin className=" h-3 w-3" /> <p className=" text-xs">Nagpur</p>
            </div>
        </div>
    )
}

export default TimeLine
