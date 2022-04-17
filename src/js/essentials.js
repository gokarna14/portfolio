import { OfficialPortrait, github, fb, youtube, twitter} from "../db/img/img";


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
]