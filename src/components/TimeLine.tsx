

const TimeLine = ({ startDate, endDate }: { startDate: string, endDate: string, }) => {
    return (
        <div className=" flex gap-1 items-center w-max">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
            <p className=" md:text-xs text-[10px]">
                <span>{startDate}</span> <span>-</span> <span >  {endDate}</span>
            </p>
        </div>
    )
}

export default TimeLine
