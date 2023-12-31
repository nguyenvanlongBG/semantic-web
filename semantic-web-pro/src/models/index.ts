export interface Film {
    title: Data,
    releaseDate: Data,
    budget: Data,
    runtime: Data,
    producttionCompanies: Data,
    director: Data,
    genres: Data,
    case: Data,
    character: Data
}
export interface Data {
    type: string,
    datatype: string,
    value: string
}