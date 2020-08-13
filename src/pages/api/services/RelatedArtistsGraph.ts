export default class RelatedArtistsGraph {
  static async createGraph(firstResponse) {
    const relatedArtists = {};
    if (firstResponse?.artists?.length) {
      // loop through each artist and get their related artists
      firstResponse.artist.each((artist) => {
        // check if in relatedArtists if not add then get related artists
        if (!relatedArtists[artist.id]) {
          relatedArtists[artist.id] = {
            id: artist.id,
            name: artist.name,
            popularity: artist.popularity,
          };
        }
      });
    }
    return "hello";
  }
}
