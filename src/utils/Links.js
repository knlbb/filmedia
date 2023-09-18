import { activegroup, activehome, activeLayers, activePlaylist, activeSearch, home, layers, playlist, search, ticket } from "../assets";

export const Links = [
    {
        name: 'Home',
        active: activehome,
        route: '/',
        imgUrl: home,
      },
      {
        name: 'Search',
        imgUrl:  search,
        route: '/search',
        active: activeSearch,
      },
      {
        name: 'Library',
        imgUrl:  layers,
        route: '/library',
        active: activeLayers,
      },
      {
        name: 'Playlist',
        imgUrl:  playlist,
        route: '/',
        active: activePlaylist,
      },
      {
        name: 'Ticket',
        imgUrl:  ticket,
        route: '/ticket',
        active: activegroup,
      },
      {
        name: 'Upload',
        imgUrl:  ticket,
        route: '/upload',
        active: activegroup,
      }
]