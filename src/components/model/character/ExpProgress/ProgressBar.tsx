export interface Props {
  percentWidth: number
  percent: number
}
export const ProgressBar = ({ percentWidth, percent }: Props): JSX.Element => {
  return (
    <div className="relative">
      <div className="grid grid-cols-10 text-left">
        <div className="flex overflow-hidden col-span-8 mx-10 my-2 h-3 text-xs bg-black rounded">
          <div
            className={`w-${String(
              percentWidth
            )} flex flex-col justify-center text-center text-white whitespace-nowrap bg-white shadow-none`}
          ></div>
        </div>
        <div className="col-span-2 ml-3">
          <span className="text-sm font-semibold text-text-red lg:text-base">
            {percent}%
          </span>
        </div>
      </div>
    </div>
  )
}
