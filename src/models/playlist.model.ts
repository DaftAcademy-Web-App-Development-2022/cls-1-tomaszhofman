export type PlaylistModel = {
  name: string;
  owner: string;
  slug: string;
  spotifyId: string;
  color?: string;
};

export type PlaylistModelWithId = PlaylistModel & {
  id: string;
};
