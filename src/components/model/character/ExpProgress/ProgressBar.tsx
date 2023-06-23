export interface Props {
  percentWidth: number
  flag: boolean
  percent: string
}
export const ProgressBar = ({
  percentWidth,
  flag,
  percent,
}: Props): JSX.Element => {
  return (
    <div className="relative">
      <div className="grid grid-cols-10 text-left">
        <div className="flex overflow-hidden col-span-8 my-2 h-3 text-xs bg-black rounded">
          <div style={{ width: `${percentWidth}%` }} className="bg-white"></div>
        </div>
        <div className="col-span-2 ml-3">
          <span className="text-sm font-semibold lg:text-base">
            {flag ? percent : ''}
          </span>
        </div>
      </div>
    </div>
  )
}
