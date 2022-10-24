export function Annotation({children, note, bottom, offset = 0}) {
    return (
        <span style={{position: "relative"}}>
            <span style={{
                position: "absolute",
                top: `${bottom ? 'auto': 0}`,
                bottom: `${bottom ? 0 : 'auto'}`,
                left: `calc(50% - ${offset}rem)`,
                transform: `translate3d(-50%, ${bottom ? 'calc(100% + 7.5rem)' : 'calc(-100% - 7.5rem)'}, 0)`,
                fontSize: "4rem",
                borderBottom: `${bottom ? 'none' : '5px solid #C594C5'}`,
                borderTop: `${bottom ? '5px solid #C594C5': 'none'}`
            }}>{note}</span>
            <span style={{
                position: "absolute",
                top: `${bottom ? 'auto': 0}`,
                bottom: `${bottom ? 0 : 'auto'}`,
                left: `calc(50% - ${offset}px)`,
                transform: "translate3d(-50%, , 0)",
                transform: `translate3d(-50%, ${bottom ? 'calc(100% + 0.5rem)' : 'calc(-100% - .5rem)'}, 0)`,
                width: "5px",
                height: "7rem",
                background: "#C594C5"
            }}></span>
            {children}
        </span>
    );
}