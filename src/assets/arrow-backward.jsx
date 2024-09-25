export default function ArrowBackward({onTrigger}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="-200 -960 960 960" width="30px" fill="#FFFFFF" className="arrow-btn" onClick={onTrigger}>
            <path d="M400-80 0-480l400-400 61 61.67L122.67-480 461-141.67 400-80Z"/>
        </svg>
    )
}