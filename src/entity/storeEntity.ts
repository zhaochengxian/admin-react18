export interface ButtonAuthModel {
    buttonsAuthed: Array<string>
}

export interface TagModel {
    path: string
    url?: string
    title?: string
}

export interface TagsViewModel {
    taglist: Array<TagModel>
}

export interface StateModel {
    buttonAuth: ButtonAuthModel
    loading: boolean
    tagsView: TagsViewModel
}
