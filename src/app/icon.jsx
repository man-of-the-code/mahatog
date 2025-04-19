import { ImageResponse } from "@vercel/og";
// "@vercel/og";
// using "edge runtime"
// export const runtime = "edge";
export const size = {
    width : 32,
    height : 32
}
export const contentType = "image/png";
export default function Icon(){
    return new ImageResponse (
        (<div
        style={{
            fontSize:18,
            fontWeight:"bold",
            width:"100%",
            height:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color: "black",
            background: "linear-gradient(to right, cyan, cyan, red)",
            borderRadius: 25
        }}
        >
        MG
        </div>),
        {...size}
    )
}