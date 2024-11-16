
export interface IWallpapers{
    uri:string,
    name:string
}

export interface FullWallpapers extends IWallpapers{
    liked:boolean,
    suggested:boolean,
    liberary:boolean
}

export function useSuggestedWallpapers():FullWallpapers[]{
    const wallpapers = useWallpapers()
    return wallpapers.filter(wallpeper=>wallpeper.suggested)
}

export function useLikedWallpapers():FullWallpapers[]{
    const wallpapers = useWallpapers()
    return wallpapers.filter(wallpeper=>wallpeper.liked)
}

export function useLiberaryWallpapers():FullWallpapers[]{
    const wallpapers = useWallpapers()
    return wallpapers.filter(wallpeper=>wallpeper.liberary)
}

export function useWallpapers():FullWallpapers[]{
    return [
        {
            uri: 'https://ideogram.ai/assets/progressive-image/balanced/response/8E3fZUrCQ_GdEwZYcykfJw',
            name:"Heritage",
            liked:true,
            suggested:true,
            liberary:false
        },
        {
            uri: 'https://ideogram.ai/assets/progressive-image/balanced/response/pQB8FWviQo6yW7PfnCRm2w',
            name:"GREEN",
            liked:true,
            suggested:false,
            liberary:true
        },
        {
            uri: 'https://ideogram.ai/assets/progressive-image/balanced/response/WoC5OHcJQ_aClfJ59dJ49A',
            name:"JGL",
            liked:false,
            suggested:true,
            liberary:false
        },
        {
            uri: 'https://ideogram.ai/assets/progressive-image/balanced/response/2OlcSwmnQwCvysGnXf2f1g',
            name:"DARK",
            liked:true,
            suggested:true,
            liberary:true
        },
        {
            uri: 'https://ideogram.ai/assets/progressive-image/balanced/response/8E3fZUrCQ_GdEwZYcykfJw',
            name:"Heritage",
            liked:true,
            suggested:false,
            liberary:false
        },
        {
            uri: 'https://ideogram.ai/assets/progressive-image/balanced/response/pQB8FWviQo6yW7PfnCRm2w',
            name:"GREEN",
            liked:false,
            suggested:false,
            liberary:true
        },
        {
            uri: 'https://ideogram.ai/assets/progressive-image/balanced/response/WoC5OHcJQ_aClfJ59dJ49A',
            name:"JGL",
            liked:true,
            suggested:true,
            liberary:false
        },
        {
            uri: 'https://ideogram.ai/assets/progressive-image/balanced/response/2OlcSwmnQwCvysGnXf2f1g',
            name:"DARK",
            liked:true,
            suggested:true,
            liberary:true
        },
    ]
}