import { Range, getTrackBackground } from "react-range";

export default function CustomRange({value, step = 0.1, min = 0, max, onChange, rounded = false}){
    return(
        <Range
            values={[value]}
            step={step}
            min={min}
            max={max}
            onChange={(values) => onChange(values[0])}
            renderTrack={({ props, children }) => (
                <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                className="h-[5px] w-full flex group "
                style={...props.style}
                >
                <div
                    ref={props.ref}
                    className={'h-full w-full ' + (rounded&&'rounded-full')}
                    style={{
                    background: getTrackBackground({
                        values: [value],
                        colors: ["#4F46E5", "#d4d4d4"],
                        min,
                        max
                    }),
                    alignSelf: "center"
                    }}
                >
                    {children}
                </div>
                </div>
            )}
            renderThumb={({ props, isDragged }) => (
                <div
                {...props}
                className={'w-3 h-3 rounded-full bg-neutral-400 z-90 relative shadow ' + (!isDragged ? 'opacity-0' : '') + ' group-hover:opacity-100 hocus:opacity-100'}
                style={...props.style}
                />
            )}
            />
    )
}