// Data projektů z loft-kolasinski.pl
// UPOZORNĚNÍ: Použití obrázků bez povolení může porušovat autorská práva.

export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  images: string[];
  location?: string;
  year?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'DOM POD BARCELONĄ',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/08/78_DSC00951_2024_hiszpania_web-600x403.jpg',
    description: 'Projekt wnętrza domu pod Barceloną łączy w sobie nowoczesność z tradycyjnym hiszpańskim stylem. Przestronne pomieszczenia z dużymi oknami zapewniają obfitość naturalnego światła, a minimalistyczne meble tworzą spokojną atmosferę.',
    images: [
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/08/78_DSC00951_2024_hiszpania_web-600x403.jpg',
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2024/08/2-t.jpg',
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2024/08/3.jpg',
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2024/08/4.jpg',
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2024/08/5.jpg',
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2024/08/6.jpg',
    ],
    location: 'Barcelona, Hiszpania',
    year: '2024',
  },
  {
    id: 2,
    title: 'WARSZAWA – MOKOTÓW',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2025/11/04_DSC00021_2025_loft_kolasinski_warszawa_m-600x403.jpg',
    description: 'Nowoczesne mieszkanie w dzielnicy Mokotów w Warszawie. Projekt charakteryzuje się otwartą przestrzenią, eleganckimi materiałami i funkcjonalnym układem pomieszczeń.',
    images: [
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2025/11/04_DSC00021_2025_loft_kolasinski_warszawa_m-600x403.jpg',
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2025/11/17_DSC01245_2025_loft_kolasinski_warszawa_m-600x403.jpg',
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2025/04/23_2025_DSC00881_loftkolasinski_warszawa_m-600x403.jpg',
    ],
    location: 'Warszawa, Mokotów',
    year: '2025',
  },
  {
    id: 3,
    title: 'BIURO NAD RZEKĄ',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/08/BAK1334_archi-600x403.jpg',
    description: 'Projekt biura z widokiem na rzekę. Przestronne, nowoczesne przestrzenie biurowe z akcentami industrialnymi i naturalnymi materiałami.',
    images: [
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/08/BAK1334_archi-600x403.jpg',
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/08/20240419120452_582A9546-600x403.jpg',
    ],
    location: 'Szczecin',
    year: '2024',
  },
  {
    id: 4,
    title: 'WARSZAWA – MOKOTOWSKA',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2025/04/23_2025_DSC00881_loftkolasinski_warszawa_m-600x403.jpg',
    description: 'Eleganckie mieszkanie przy ulicy Mokotowskiej. Projekt łączy klasykę z nowoczesnością, tworząc przytulną i funkcjonalną przestrzeń do życia.',
    images: [
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2025/04/23_2025_DSC00881_loftkolasinski_warszawa_m-600x403.jpg',
    ],
    location: 'Warszawa, Mokotowska',
    year: '2025',
  },
  {
    id: 5,
    title: 'MIESZKANIE WAKACYJNE KAMIEŃ POMORSKI',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2025/03/15_DSC00500_2025_kamien_pomorski_media-600x403.jpg',
    description: 'Przytulne mieszkanie wakacyjne w Kamieniu Pomorskim. Lekki, morski klimat z naturalnymi materiałami i jasnymi kolorami.',
    images: [
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2025/03/15_DSC00500_2025_kamien_pomorski_media-600x403.jpg',
    ],
    location: 'Kamień Pomorski',
    year: '2025',
  },
  {
    id: 6,
    title: 'Hanza Tower Szczecin',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/10/4-600x403.jpg',
    description: 'Nowoczesne wnętrza w wieżowcu Hanza Tower w Szczecinie. Projekt wykorzystuje przestronność i światło, tworząc eleganckie przestrzenie mieszkalne.',
    images: [
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/10/4-600x403.jpg',
    ],
    location: 'Szczecin',
    year: '2024',
  },
  {
    id: 7,
    title: 'LOFT-WARSZAWA, WOLA',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/05/9_DSC05402_2023_warszawa_w-600x403.jpg',
    description: 'Industrialny loft w dzielnicy Wola w Warszawie. Otwarta przestrzeń z ceglanymi ścianami i nowoczesnym wyposażeniem.',
    images: [
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/05/9_DSC05402_2023_warszawa_w-600x403.jpg',
    ],
    location: 'Warszawa, Wola',
    year: '2023',
  },
  {
    id: 8,
    title: 'WARSZAWA GRZYBOWSKA',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2021/02/2021_5_warszawa_loftkolasinski_joelhauck_DSC08755-HDR-Edit-600x403.jpg',
    description: 'Eleganckie mieszkanie przy ulicy Grzybowskiej. Projekt charakteryzuje się wyrafinowanym designem i wysokiej jakości materiałami.',
    images: [
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2021/02/2021_5_warszawa_loftkolasinski_joelhauck_DSC08755-HDR-Edit-600x403.jpg',
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/03/2021_3_warszawa_loftkolasinski_joelhauck_DSC08838-Edit-600x403.jpg',
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/03/2021_30_warszawa_loftkolasinski_joelhauck_DSC08718-HDR-Edit-600x403.jpg',
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/03/2021_25_warszawa_loftkolasinski_joelhauck_DSC08704-600x403.jpg',
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/03/2021_warszawa_loftkolasinski_joelhauck_DSC08728-Edit-600x403.jpg',
    ],
    location: 'Warszawa, Grzybowska',
    year: '2021',
  },
  {
    id: 9,
    title: 'KRAKÓW – KAZIMIERZ',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/07/DSC06477_2023_krakow_w-1-600x403.jpg',
    description: 'Apartament turystyczny w historycznej dzielnicy Kazimierz w Krakowie. Projekt łączy tradycję z nowoczesnością.',
    images: [
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/07/DSC06477_2023_krakow_w-1-600x403.jpg',
    ],
    location: 'Kraków, Kazimierz',
    year: '2023',
  },
  {
    id: 10,
    title: 'PENTHOUSE WARSZAWA',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2023/05/okladka_t-600x403.jpg',
    description: 'Luksusowy penthouse w Warszawie z panoramicznym widokiem na miasto. Nowoczesny design z najwyższej jakości materiałami.',
    images: [
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2023/05/okladka_t-600x403.jpg',
    ],
    location: 'Warszawa',
    year: '2023',
  },
  {
    id: 11,
    title: 'MIESZKANIE Z 1936 ROKU',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/10/11-600x403.jpg',
    description: 'Renowacja mieszkania z 1936 roku w Warszawie. Projekt zachowuje historyczny charakter, jednocześnie wprowadzając nowoczesne rozwiązania.',
    images: [
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/10/11-600x403.jpg',
    ],
    location: 'Warszawa, Żoliborz',
    year: '2023',
  },
  {
    id: 12,
    title: 'LIMONE CAFE – SZCZECIN',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/06/limone2.jpg',
    description: 'Projekt wnętrza kawiarni Limone w Szczecinie. Przytulna przestrzeń z akcentami kolorystycznymi i naturalnymi materiałami.',
    images: [
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2023/06/limone2.jpg',
    ],
    location: 'Szczecin',
    year: '2023',
  },
  {
    id: 13,
    title: 'Punkt Cafe Restauracja',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2022/02/2022_01_DSC03891-Edit_restauracja_punkt_szczecin-600x403.jpg',
    description: 'Projekt wnętrza restauracji Punkt Cafe w Szczecinie. Nowoczesna przestrzeń gastronomiczna z industrialnymi akcentami.',
    images: [
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2022/02/2022_01_DSC03891-Edit_restauracja_punkt_szczecin-600x403.jpg',
    ],
    location: 'Szczecin, Plac Zamenhofa',
    year: '2022',
  },
  {
    id: 14,
    title: 'Adaptacja kuźni',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2021/10/2021_filtrowa_DSC03366-Edit-600x403.jpg',
    description: 'Adaptacja dawnej kuźni na nowoczesne mieszkanie. Projekt zachowuje industrialny charakter budynku, tworząc unikalną przestrzeń mieszkalną.',
    images: [
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2021/10/2021_filtrowa_DSC03366-Edit-600x403.jpg',
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2021/10/kuznia08-archi-t-600x403.jpg',
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2021/10/kuznia21-archi3-t.png',
    ],
    location: 'Szczecin',
    year: '2021',
  },
  {
    id: 15,
    title: 'WILLA BAUHAUS 1936',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2021/06/konstancin_archilovers_t-600x403.jpg',
    description: 'Renowacja willi w stylu Bauhaus z 1936 roku w Konstancinie. Projekt zachowuje modernistyczny charakter, wprowadzając współczesne rozwiązania.',
    images: [
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2021/06/konstancin_archilovers_t-600x403.jpg',
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2024/03/2021_29_konstancin_DSC00182-600x403.jpg',
    ],
    location: 'Konstancin-Jeziorna',
    year: '2021',
  },
  {
    id: 16,
    title: 'MIESZKANIE Z 1939 ROKU',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2020/10/2020_05_ochota_loftkolasinski_joelhauck_DSC08234-HDR-Edit-1-600x403.jpg',
    description: 'Renowacja mieszkania z 1939 roku w Warszawie. Projekt łączy historyczne elementy z nowoczesnym designem.',
    images: [
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2020/10/2020_05_ochota_loftkolasinski_joelhauck_DSC08234-HDR-Edit-1-600x403.jpg',
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2019/07/01-DSC03216-Edit_2-600x403.jpg',
    ],
    location: 'Warszawa, Ochota',
    year: '2020',
  },
  {
    id: 17,
    title: 'Qbik Loft Woronicza',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2019/07/01-DSC03216-Edit_2-600x403.jpg',
    description: 'Nowoczesny loft przy ulicy Woronicza w Warszawie. Otwarta przestrzeń z industrialnymi akcentami.',
    images: [
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2019/07/01-DSC03216-Edit_2-600x403.jpg',
    ],
    location: 'Warszawa, Woronicza',
    year: '2019',
  },
  {
    id: 18,
    title: 'Dom z 1923 roku',
    category: 'Projekty wnętrz',
    thumbnail: 'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2019/08/DSC04410-HDR-Edit_2-600x403.jpg',
    description: 'Renowacja domu z 1923 roku. Projekt zachowuje historyczny charakter, wprowadzając nowoczesne rozwiązania funkcjonalne.',
    images: [
      'https://d2knpontqjzj9g.cloudfront.net/wp-content/uploads/2019/08/DSC04410-HDR-Edit_2-600x403.jpg',
      'https://d2vzorxxgdhozt.cloudfront.net/wp-content/uploads/2019/08/DSC03731-Edit_2-2-600x403.jpg',
    ],
    location: 'Pogodno, Szczecin',
    year: '2019',
  },
  {
    id: 19,
    title: 'WARSZAWA – MOKOTÓW',
    category: 'Projekty wnętrz',
    thumbnail: 'https://loft-kolasinski.pl/wp-content/uploads/2019/02/mokotow.jpg',
    description: 'Eleganckie mieszkanie w dzielnicy Mokotów. Nowoczesny design z wysokiej jakości materiałami i funkcjonalnym układem.',
    images: [
      'https://loft-kolasinski.pl/wp-content/uploads/2019/02/mokotow.jpg',
      'https://loft-kolasinski.pl/wp-content/uploads/2019/02/DSC01143-Edit-Edit_2-600x403.jpg',
    ],
    location: 'Warszawa, Mokotów',
    year: '2019',
  },
  {
    id: 20,
    title: 'APARTAMENT NA PODDASZU',
    category: 'Projekty wnętrz',
    thumbnail: 'https://loft-kolasinski.pl/wp-content/uploads/2019/02/DSC01143-Edit-Edit_2-600x403.jpg',
    description: 'Projekt apartamentu na poddaszu kamienicy z 1911 roku w Krakowie. Wykorzystanie skosów i naturalnego światła.',
    images: [
      'https://loft-kolasinski.pl/wp-content/uploads/2019/02/DSC01143-Edit-Edit_2-600x403.jpg',
    ],
    location: 'Kraków',
    year: '2019',
  },
];

export function getProjectById(id: number): Project | undefined {
  return projects.find(p => p.id === id);
}

export function getAllProjects(): Project[] {
  return projects;
}

