export function stringToSvg(svgString: string): SVGSVGElement{
    const SVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    console.log(svgString)
    return SVGElement
}

interface IJSONSVG{
    fill: string
    stroke: string
    children: IJSONSVG[]
}

export function jsonToSvg(stringSvg: string): SVGSVGElement{
    const SVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
    return SVGElement
}