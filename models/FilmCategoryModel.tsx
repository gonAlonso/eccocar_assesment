import FilmItemModel from './FilmItemModel';

type FilmCategoryModel  = {
  available: number
  collectionURI: string
  items: FilmItemModel[]
  returned: number
}

export default FilmCategoryModel