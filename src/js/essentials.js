import { OfficialPortrait, github, fb, youtube, twitter, linkedin, gmail} from "../db/img/img";


export const hugeScroll = Array.from({length: 400}, () => 20).map(
    (i)=>{
        return(
            <><br/>1</>
        )
    }
)

export const spacing = Array.from({length: 10}, () => 0).map(
    (i)=>{
        return(
            <><br/></>
        )
    }
)

export const profiles=[
    {
        logo: github,
        link: 'https://github.com/gokarna14'
    },
    {
        logo: linkedin,
        link: 'https://www.linkedin.com/in/prabas-gokarna-adhikari-b1a9461b7/'
    },
    {
        logo: fb,
        link: 'https://www.facebook.com/prabasGokarna'
    },
    {
        logo: twitter,
        link: 'https://twitter.com/AdhikaiGokarna'
    },
    {
        logo: youtube,
        link: 'https://www.youtube.com/c/PGA123/featured'
    },
    {
        logo: gmail,
        link: 'mailto:gokarna.adhikari14@gmail.com'
    },
]

export var themeRGB = {
    dark: {R:68, G: 68, B:68},
    red: {R:156, G: 36, B:4},
    normal: {R:0, G: 107, B:161},
    orange: {R:228, G: 92, B:77},
    light: {R:244, G: 244, B:242},
}
export var themeRGB2 = {
    dark: {R:50, G: 50, B:50},
    red: {R:151, G: 101, B:84},
    normal: {R:27, G: 24, B:55},
    orange: {R:174, G: 183, B:206},
    light: {R:232, G: 232, B:202},
}
export var fontRGB = {
    dark: {R:232, G: 232, B:210},
    red: {R:255, G: 255, B:255},
    normal: {R:255, G: 255, B:255},
    orange: {R:0, G: 28, B:27},
    light: {R:0, G: 84, B:0},
}