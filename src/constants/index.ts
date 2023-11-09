import { Movie } from '../interfaces';
import { Event } from '../interfaces/event';

export const navLinks = [
  {
    id: 'about',
    path: 'about'
  },
  {
    id: 'cinemas',
    path: 'cinemas'
  },
  {
    id: 'contact',
    path: 'contact'
  }
];
const movies: Array<Movie> = [
  {
    name: 'Conan: Cú đấm sapphire xanh',
    shortDescription: 'helloooo',
    description: 'ê',
    rating: 4.8,
    bannerUrl:
      'https://1.bp.blogspot.com/-QcwpqILyR_0/XbpbxQxWmNI/AAAAAAAALMA/tpWPZ0-nfXUT42SQ_0gXsTn8DHTuhvqJwCLcBGAsYHQ/w1200-h630-p-k-no-nu/detective_conan_movie_2019_philippines_release%2528Photo%2529%2528noise%2529%2528Level3%2529.png',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BYjNjMTUxM2ItOThhZi00ZTMyLWI5NDItNmViOWI0MjJjMjE4XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
    basePrice: 1000,
    basePriceDiscount: 0,
    files: [
      {
        url: 'https://m.media-amazon.com/images/M/MV5BYjNjMTUxM2ItOThhZi00ZTMyLWI5NDItNmViOWI0MjJjMjE4XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        mime_type: 'img',
        name: 'name',
        size: 2014
      },
      {
        url: 'https://m.media-amazon.com/images/M/MV5BYjNjMTUxM2ItOThhZi00ZTMyLWI5NDItNmViOWI0MjJjMjE4XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        mime_type: 'img',
        name: 'name',
        size: 2014
      }
    ],
    premiereAt: new Date(),
    slug: 'conan-Cu-dam-sapphire-xanh'
  },
  {
    name: 'Đất rừng phương Nam',
    shortDescription: 'helloooo',
    description: 'ê',
    rating: 4.4,
    bannerUrl:
      'https://1.bp.blogspot.com/-QcwpqILyR_0/XbpbxQxWmNI/AAAAAAAALMA/tpWPZ0-nfXUT42SQ_0gXsTn8DHTuhvqJwCLcBGAsYHQ/w1200-h630-p-k-no-nu/detective_conan_movie_2019_philippines_release%2528Photo%2529%2528noise%2529%2528Level3%2529.png',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    basePrice: 1000,
    basePriceDiscount: 0,
    files: [],
    publishedAt: new Date(),
    slug: 'dat-rung-phuong-nam'
  },
  {
    name: 'Conan: Tàu ngầm sắt màu đen',
    shortDescription: 'helloooo',
    description: 'ê',
    rating: 4.8,
    bannerUrl: 'https://ecdn.game4v.com/g4v-content/uploads/2023/05/09082933/Conan-movie-26-1-game4v-1683595773-53.jpg',
    thumbnail: 'https://www.phimshare.com/upload/thang072023/Detective-Conan-Black-Iron-Submarine-2023.1.jpg',
    basePrice: 1000,
    basePriceDiscount: 0,
    files: [],
    premiereAt: new Date(),
    slug: 'conan-con-tau-sac-mau-den'
  }
];

const events: Array<Event> = [
  {
    title: {
      vi: 'Conan: Cú đấm sapphire xanh'
    },
    shortDescription: {
      vi: 'Hayao Miyazaki’s ‘The Boy and the Heron’ Announces English Voice Cast: Christian Bale, Florence Pugh and Robert Pattinson to Star'
    },
    content: {
      vi: 'hello'
    },
    bannerUrl:
      'https://1.bp.blogspot.com/-QcwpqILyR_0/XbpbxQxWmNI/AAAAAAAALMA/tpWPZ0-nfXUT42SQ_0gXsTn8DHTuhvqJwCLcBGAsYHQ/w1200-h630-p-k-no-nu/detective_conan_movie_2019_philippines_release%2528Photo%2529%2528noise%2529%2528Level3%2529.png'
  },
  {
    title: {
      vi: 'Conan: Cú đấm sapphire xanh'
    },
    shortDescription: {
      vi: 'Hayao Miyazaki’s ‘The Boy and the Heron’ Announces English Voice Cast: Christian Bale, Florence Pugh and Robert Pattinson to Star'
    },
    content: {
      vi: 'hello'
    },
    bannerUrl:
      'https://1.bp.blogspot.com/-QcwpqILyR_0/XbpbxQxWmNI/AAAAAAAALMA/tpWPZ0-nfXUT42SQ_0gXsTn8DHTuhvqJwCLcBGAsYHQ/w1200-h630-p-k-no-nu/detective_conan_movie_2019_philippines_release%2528Photo%2529%2528noise%2529%2528Level3%2529.png'
  },
  {
    title: {
      vi: 'Conan: Cú đấm sapphire xanh'
    },
    shortDescription: {
      vi: 'Hayao Miyazaki’s ‘The Boy and the Heron’ Announces English Voice Cast: Christian Bale, Florence Pugh and Robert Pattinson to Star'
    },
    content: {
      vi: 'hello'
    },
    bannerUrl:
      'https://1.bp.blogspot.com/-QcwpqILyR_0/XbpbxQxWmNI/AAAAAAAALMA/tpWPZ0-nfXUT42SQ_0gXsTn8DHTuhvqJwCLcBGAsYHQ/w1200-h630-p-k-no-nu/detective_conan_movie_2019_philippines_release%2528Photo%2529%2528noise%2529%2528Level3%2529.png'
  }
];
const members: Array<Event> = [
  {
    title: {
      vi: 'Culture day'
    },
    shortDescription: {
      vi: 'Hayao Miyazaki’s ‘The Boy and the Heron’ Announces English Voice Cast: Christian Bale, Florence Pugh and Robert Pattinson to Star'
    },
    content: {
      vi: 'hello'
    },
    bannerUrl:
      'https://www.cgv.vn/media/banner/cache/3/b58515f018eb873dafa430b6f9ae0c1e/2/0/2023_culture_day_n_o_240x201_1.png'
  },
  {
    title: {
      vi: 'U22'
    },
    shortDescription: {
      vi: 'Hayao Miyazaki’s ‘The Boy and the Heron’ Announces English Voice Cast: Christian Bale, Florence Pugh and Robert Pattinson to Star'
    },
    content: {
      vi: 'hello'
    },
    bannerUrl: 'https://www.cgv.vn/media/banner/cache/3/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22-102023-240x201_1.jpg'
  }
];

export { movies, events, members };
