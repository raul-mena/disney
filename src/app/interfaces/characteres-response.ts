export interface CharacteresResponse {
    data: Character[];
    count: number;
    totalPages: number;
    nextPage: string;
}

export interface Character {
    name: string;
    url: string;
    _id: number;
    imageUrl: string;
    films: string[];
    tvShows: string[];
}