import FilmCategoryModel from './FilmCategoryModel';
import FilmItemModel from './FilmItemModel';

type FilmListModel  = {
    id: number
    name: string
    description: string
    modified: Date
    thumbnail: {
        path: string
        extension: string
    },
    resourceURI: string
    comics: FilmCategoryModel
    series: FilmCategoryModel
    stories: FilmCategoryModel
    events: FilmCategoryModel
    urls: FilmItemModel[]
}


export default FilmListModel