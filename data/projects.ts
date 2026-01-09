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


  // Projekty z 3xel.pl
  {
    id: 21,
    title: 'Projekty - ',
    category: 'Projekty wnętrz',
    thumbnail: '',
    description: 'Projekt z 3xel.pl - Projekty - Barakk design',
    images: [
      ''
    ],
    location: 'Kopřivnice',
    year: '2016'
  },
  {
    id: 22,
    title: '',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2018/08/3xel.svg',
    description: 'Projekt z 3xel.pl - Barakk design',
    images: [
      'https://3xel.pl/wp-content/uploads/2018/08/3xel.svg'
    ],
    location: 'Ostrava',
    year: '2015'
  },
  {
    id: 23,
    title: 'Kontakt - ',
    category: 'Projekty wnętrz',
    thumbnail: '',
    description: 'Projekt z 3xel.pl - Kontakt - Barakk design',
    images: [
      ''
    ],
    location: 'Opava',
    year: '2020'
  },
  {
    id: 24,
    title: 'Cześć, powiedz nam coś o sobie, a zaprojektujemy Twoją przestrzeń.',
    category: 'Projekty wnętrz',
    thumbnail: '',
    description: '3xel - projektant wnętrz - sprawdź naszą ofertę! Projektowanie i aranżacja wnętrz wg indywidualnych wytycznych. Warszawa i Łódź - zapraszamy do naszego biura projektowego!',
    images: [
      ''
    ],
    location: 'Ostrava',
    year: '2016'
  },
  {
    id: 25,
    title: 'Dům w Bukowcu',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2025/03/3XEL-Architekci_Dom-jednorodzinny_Bukowiec_Salon-klasyczny-1-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza mieszkania w Łodzi. Projektowanie wnętrz Łódź, Warszawa, Polska',
    images: [
      'https://3xel.pl/wp-content/uploads/2025/03/3XEL-Architekci_Dom-jednorodzinny_Bukowiec_Salon-klasyczny-1-scaled.jpg'
    ],
    location: 'Bohumín',
    year: '2020'
  },
  {
    id: 26,
    title: 'Dům w Krakowie',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2024/10/3xel_Skibowa_©_ONI_Studio_7389-16-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza mieszkania w Łodzi. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2024/10/3xel_Skibowa_©_ONI_Studio_7389-16-scaled.jpg'
    ],
    location: 'Český Těšín',
    year: '2020'
  },
  {
    id: 27,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2024/10/3XEL-PORA©-P44-14-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza mieszkania w Łodzi. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2024/10/3XEL-PORA©-P44-14-scaled.jpg'
    ],
    location: 'Nový Jičín',
    year: '2020'
  },
  {
    id: 28,
    title: 'Byt w Katowicach',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/06/3xel_Sokolska_©_ONI_Studio_32026-17-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza mieszkania w Łodzi. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/06/3xel_Sokolska_©_ONI_Studio_32026-17-scaled.jpg'
    ],
    location: 'Orlová',
    year: '2020'
  },
  {
    id: 29,
    title: 'Dům w Sieradzu',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/06/3xel_Pogonowskiego_©_ONI_Studio_8885-3-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza mieszkania w Łodzi. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/06/3xel_Pogonowskiego_©_ONI_Studio_8885-3-scaled.jpg'
    ],
    location: 'Ostrava',
    year: '2020'
  },
  {
    id: 30,
    title: 'Dům w Sieradzu',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2024/02/ZASOBY_0002-Z1001393_1920.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza domu w Sieradzu. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2024/02/ZASOBY_0002-Z1001393_1920.jpg'
    ],
    location: 'Ostrava',
    year: '2020'
  },
  {
    id: 31,
    title: 'Dům na Ursynowie',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/10/3xel_Muslinowa_©_ONI_Studio_28302-32-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza domu na Warszawskiem Ursynowie. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/10/3xel_Muslinowa_©_ONI_Studio_28302-32-scaled.jpg'
    ],
    location: 'Ostrava',
    year: '2020'
  },
  {
    id: 32,
    title: 'Apartmán w Essen',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Essen-10-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza mieszkania w Essen. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Essen-10-scaled.jpg'
    ],
    location: 'Nový Jičín',
    year: '2020'
  },
  {
    id: 33,
    title: 'Byt w Kamienicy',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Maja-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania w łódzkiej kamienicy. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Maja-scaled.jpg'
    ],
    location: 'Bohumín',
    year: '2020'
  },
  {
    id: 34,
    title: 'Byt w Katowicach',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Opolska-4-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania w Częstochowie. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Opolska-4-scaled.jpg'
    ],
    location: 'Třinec',
    year: '2020'
  },
  {
    id: 35,
    title: 'M_CZE',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/05/3XEL-PORA©-Czestochowa-2-of-27-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania w Częstochowie. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/05/3XEL-PORA©-Czestochowa-2-of-27-scaled.jpg'
    ],
    location: 'Havířov',
    year: '2020'
  },
  {
    id: 36,
    title: 'Warm Minimalism',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/04/DSC00997.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz domu jednorodzonego pod Warszawą. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/04/DSC00997.jpg'
    ],
    location: 'Bruntál',
    year: '2023'
  },
  {
    id: 37,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/03/Milionowa8-6-of-24-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania pod wynajem w Łodzi na osiedlu Fuzja. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/03/Milionowa8-6-of-24-scaled.jpg'
    ],
    location: 'Kopřivnice',
    year: '2023'
  },
  {
    id: 38,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/01/3XEL-Migdal_small_11.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz Domu w Bobrowcu. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/01/3XEL-Migdal_small_11.jpg'
    ],
    location: 'Opava',
    year: '2022'
  },
  {
    id: 39,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/01/3xel_Mickiewicza_16_©_ONI_Studio_4124-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania 60m2 w Łodzi. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/01/3xel_Mickiewicza_16_©_ONI_Studio_4124-scaled.jpg'
    ],
    location: 'Ostrava',
    year: '2022'
  },
  {
    id: 40,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/01/Kopcinskiego-5-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania 50m2 w Łodzi. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/01/Kopcinskiego-5-scaled.jpg'
    ],
    location: 'Havířov',
    year: '2022'
  },
  {
    id: 41,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/01/Bonarka-1-of-30-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania w Krakowie na osiedlu Bonarka Living. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/01/Bonarka-1-of-30-scaled.jpg'
    ],
    location: 'Nový Jičín',
    year: '2023'
  },
  {
    id: 42,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2022/11/3xel_Milionowa98_©_ONI_Studio_13810-10-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania 50m2 w Łodzi. Fuzja Łódź. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2022/11/3xel_Milionowa98_©_ONI_Studio_13810-10-scaled.jpg'
    ],
    location: 'Bohumín',
    year: '2022'
  },
  {
    id: 43,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2022/08/3XEL-Architekci-Fuzja-Lodz-9-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania 50m2 w Łodzi. Fuzja Łódź. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2022/08/3XEL-Architekci-Fuzja-Lodz-9-scaled.jpg'
    ],
    location: 'Bohumín',
    year: '2022'
  },
  {
    id: 44,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2022/03/DSC01768-HDR-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja mikro kawalerki o powierzchni 29m2 w Łodzi. Projektowanie indywidualnych wnętrz. Łódź- Warszawa.',
    images: [
      'https://3xel.pl/wp-content/uploads/2022/03/DSC01768-HDR-scaled.jpg'
    ],
    location: 'Třinec',
    year: '2022'
  },
  {
    id: 45,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2021/11/3xel_Mickiewicza_59_©_ONI_Studio_4504-scaled.jpg',
    description: 'Mieszkanie | Łódź | 2022 - Barakk design - Projekt i realizacja mieszkania pod wynajemn. Projektowanie wnętrz Łódź, Warszawa. Zapraszmy do kontaktu.',
    images: [
      'https://3xel.pl/wp-content/uploads/2021/11/3xel_Mickiewicza_59_©_ONI_Studio_4504-scaled.jpg'
    ],
    location: 'Třinec',
    year: '2022'
  },
  {
    id: 46,
    title: 'Apartmán w Łodzi.',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2021/02/Apartment-with-workshop_internet-9.jpg',
    description: 'Apartament | Łódź | 2020 - Barakk design - Projekt i realizacja mieszkania pod wynajemn. Projektowanie wnętrz Łódź, Warszawa. Zapraszmy do kontaktu.',
    images: [
      'https://3xel.pl/wp-content/uploads/2021/02/Apartment-with-workshop_internet-9.jpg'
    ],
    location: 'Opava',
    year: '2020'
  },
  {
    id: 47,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2021/11/20210215_3xel_2048px-4.jpg',
    description: 'Mieszkanie | Łódź | 2021 - Barakk design - Projekt i realizacja mieszkania pod wynajemn. Projektowanie wnętrz Łódź, Warszawa. Zapraszmy do kontaktu.',
    images: [
      'https://3xel.pl/wp-content/uploads/2021/11/20210215_3xel_2048px-4.jpg'
    ],
    location: 'Český Těšín',
    year: '2021'
  },
  {
    id: 48,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2020/12/20201127_3XEL_2048px-1.jpg',
    description: 'Mieszkanie | Łódź | 2020 - Barakk design - Projekt i realizacja mieszkania pod wynajemn. Projektowanie wnętrz Łódź, Warszawa. Zapraszmy do kontaktu.',
    images: [
      'https://3xel.pl/wp-content/uploads/2020/12/20201127_3XEL_2048px-1.jpg'
    ],
    location: 'Frýdek-Místek',
    year: '2020'
  },
  {
    id: 49,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2021/04/20210311_3XEL_2048px-2.jpg',
    description: 'Mieszkanie | Łódź | 2020 - Barakk design - Realizacja mieszkania w Łodzi. Projektowanie wnętrz Łódź, Warszawa. Zapraszamy do kontaktu.',
    images: [
      'https://3xel.pl/wp-content/uploads/2021/04/20210311_3XEL_2048px-2.jpg'
    ],
    location: 'Bruntál',
    year: '2020'
  },
  {
    id: 50,
    title: 'Byt z maskami na Ursynowie',
    category: 'Projekty wnętrz',
    thumbnail: 'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-5.jpg',
    description: 'Projektowanie wnętrz Łódź, Warszawa Barakk design. Indywidualne projekty wnętrz prywatnyh i komercyjnycg. Zapraszmy do kontaktu.',
    images: [
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-5.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-6.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-4.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-10.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-11.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-12.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-13.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-9.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-3.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-2.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-1.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-7.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-8.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-14.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-18.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-15.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-16.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-17.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-19.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-20.jpg'
    ],
    location: 'Karviná',
    year: '2020'
  }
,

  // Projekty z 3xel.pl
  {
    id: 51,
    title: 'Projekty - ',
    category: 'Projekty wnętrz',
    thumbnail: '',
    description: 'Projekt z 3xel.pl - Projekty - Barakk design',
    images: [
      'https://3xel.pl/wp-content/uploads/2025/03/3XEL-Architekci_Dom-jednorodzinny_Bukowiec_Salon-klasyczny-1.jpg',
      'https://3xel.pl/wp-content/uploads/2024/10/3xel_Skibowa_©_ONI_Studio_7476-21.jpg',
      'https://3xel.pl/wp-content/uploads/2024/10/3XEL-PORA©-P44-13.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3xel_Sokolska_©_ONI_Studio_32026-17.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3xel_Pogonowskiego_©_ONI_Studio_8885-3.jpg',
      'https://3xel.pl/wp-content/uploads/2024/02/ZASOBY_0002-Z1001393_1920.jpg',
      'https://3xel.pl/wp-content/uploads/2023/10/3xel_Muslinowa_©_ONI_Studio_28302-32.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Essen-10.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Maja-14.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Opolska-4.jpg',
      'https://3xel.pl/wp-content/uploads/2023/05/3XEL-PORA©-Czestochowa-7-of-27.jpg',
      'https://3xel.pl/wp-content/uploads/2023/04/DSC00292.jpg',
      'https://3xel.pl/wp-content/uploads/2023/03/Milionowa8-3-of-242.jpg',
      'https://3xel.pl/wp-content/uploads/2023/01/3XEL-Migdal_small_14.jpg',
      'https://3xel.pl/wp-content/uploads/2023/01/3xel_Mickiewicza_16_©_ONI_Studio_4151.jpg',
      'https://3xel.pl/wp-content/uploads/2023/01/Kopcinskiego-5.jpg',
      'https://3xel.pl/wp-content/uploads/2023/01/Bonarka-1-of-30.jpg',
      'https://3xel.pl/wp-content/uploads/2022/11/3xel_Milionowa98_©_ONI_Studio_13810-10.jpg',
      'https://3xel.pl/wp-content/uploads/2022/08/3XEL-Architekci-Fuzja-Lodz-9.jpg',
      'https://3xel.pl/wp-content/uploads/2022/03/DSC01768-HDR.jpg',
      'https://3xel.pl/wp-content/uploads/2021/11/3xel_Mickiewicza_59_©_ONI_Studio_4674.jpg',
      'https://3xel.pl/wp-content/uploads/2021/02/Apartment-with-workshop_internet-10.jpg',
      'https://3xel.pl/wp-content/uploads/2021/11/20210215_3xel_2048px-4.jpg',
      'https://3xel.pl/wp-content/uploads/2020/12/20201127_3XEL_2048px-1.jpg',
      'https://3xel.pl/wp-content/uploads/2021/04/20210311_3XEL_2048px-2.jpg',
      'https://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-5.jpg',
      'https://3xel.pl/wp-content/uploads/2020/06/20200611-3XEL_2048-4.jpg',
      'https://3xel.pl/wp-content/uploads/2020/04/20200114-3XEL_2048-5.jpg',
      'https://3xel.pl/wp-content/uploads/2019/10/3XEL-architekci-lodz-mieszaknie-minimalizm.jpg',
      'https://3xel.pl/wp-content/uploads/2019/07/3XEL_mieszkanie_zoliborz_kroniki_studio_03_1500.jpg'
    ],
    location: 'Třinec',
    year: '2016'
  },
  {
    id: 52,
    title: '',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2018/08/3xel.svg',
    description: 'Projekt z 3xel.pl - Barakk design',
    images: [
      'https://3xel.pl/wp-content/uploads/2018/08/3xel.svg'
    ],
    location: 'Havířov',
    year: '2015'
  },
  {
    id: 53,
    title: 'Kontakt - ',
    category: 'Projekty wnętrz',
    thumbnail: '',
    description: 'Projekt z 3xel.pl - Kontakt - Barakk design',
    images: [
      ''
    ],
    location: 'Český Těšín',
    year: '2020'
  },
  {
    id: 54,
    title: 'Cześć, powiedz nam coś o sobie, a zaprojektujemy Twoją przestrzeń.',
    category: 'Projekty wnętrz',
    thumbnail: '',
    description: '3xel - projektant wnętrz - sprawdź naszą ofertę! Projektowanie i aranżacja wnętrz wg indywidualnych wytycznych. Warszawa i Łódź - zapraszamy do naszego biura projektowego!',
    images: [
      'https://3xel.pl/wp-content/uploads/2025/03/3XEL-Architekci_Dom-jednorodzinny_Bukowiec_Salon-klasyczny-1.jpg',
      'https://3xel.pl/wp-content/uploads/2024/10/3xel_Skibowa_©_ONI_Studio_7476-21.jpg',
      'https://3xel.pl/wp-content/uploads/2024/10/3XEL-PORA©-P44-13.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3xel_Sokolska_©_ONI_Studio_32026-17.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3xel_Pogonowskiego_©_ONI_Studio_8885-3.jpg',
      'https://3xel.pl/wp-content/uploads/2024/02/ZASOBY_0002-Z1001393_1920.jpg',
      'https://3xel.pl/wp-content/uploads/2023/10/3xel_Muslinowa_©_ONI_Studio_28302-32.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Essen-10.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Maja-14.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Opolska-4.jpg',
      'https://3xel.pl/wp-content/uploads/2023/05/3XEL-PORA©-Czestochowa-7-of-27.jpg',
      'https://3xel.pl/wp-content/uploads/2023/04/DSC00292.jpg',
      'https://3xel.pl/wp-content/uploads/2023/03/Milionowa8-3-of-242.jpg',
      'https://3xel.pl/wp-content/uploads/2023/01/3XEL-Migdal_small_14.jpg',
      'https://3xel.pl/wp-content/uploads/2023/01/3xel_Mickiewicza_16_©_ONI_Studio_4151.jpg',
      'https://3xel.pl/wp-content/uploads/2023/01/Kopcinskiego-5.jpg',
      'https://3xel.pl/wp-content/uploads/2023/01/Bonarka-1-of-30.jpg',
      'https://3xel.pl/wp-content/uploads/2022/11/3xel_Milionowa98_©_ONI_Studio_13810-10.jpg',
      'https://3xel.pl/wp-content/uploads/2022/08/3XEL-Architekci-Fuzja-Lodz-9.jpg',
      'https://3xel.pl/wp-content/uploads/2022/03/DSC01768-HDR.jpg',
      'https://3xel.pl/wp-content/uploads/2021/11/3xel_Mickiewicza_59_©_ONI_Studio_4674.jpg',
      'https://3xel.pl/wp-content/uploads/2021/02/Apartment-with-workshop_internet-10.jpg',
      'https://3xel.pl/wp-content/uploads/2021/11/20210215_3xel_2048px-4.jpg',
      'https://3xel.pl/wp-content/uploads/2020/12/20201127_3XEL_2048px-1.jpg',
      'https://3xel.pl/wp-content/uploads/2021/04/20210311_3XEL_2048px-2.jpg',
      'https://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-5.jpg',
      'https://3xel.pl/wp-content/uploads/2020/06/20200611-3XEL_2048-4.jpg',
      'https://3xel.pl/wp-content/uploads/2020/04/20200114-3XEL_2048-5.jpg',
      'https://3xel.pl/wp-content/uploads/2019/10/3XEL-architekci-lodz-mieszaknie-minimalizm.jpg',
      'https://3xel.pl/wp-content/uploads/2019/07/3XEL_mieszkanie_zoliborz_kroniki_studio_03_1500.jpg'
    ],
    location: 'Opava',
    year: '2016'
  },
  {
    id: 55,
    title: 'Dům w Bukowcu',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2025/03/3XEL-Architekci_Dom-jednorodzinny_Bukowiec_Salon-klasyczny-1-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza mieszkania w Łodzi. Projektowanie wnętrz Łódź, Warszawa, Polska',
    images: [
      'https://3xel.pl/wp-content/uploads/2025/03/3XEL-Architekci_Dom-jednorodzinny_Bukowiec_Salon-klasyczny-1-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2025/03/3XEL-Architekci_Dom-jednorodzinny_Bukowiec_Salon-klasyczny-1.jpg'
    ],
    location: 'Frýdek-Místek',
    year: '2020'
  },
  {
    id: 56,
    title: 'Dům w Krakowie',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2024/10/3xel_Skibowa_©_ONI_Studio_7389-16-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza mieszkania w Łodzi. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2024/10/3xel_Skibowa_©_ONI_Studio_7389-16-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2024/10/3xel_Skibowa_©_ONI_Studio_7389-16.jpg'
    ],
    location: 'Třinec',
    year: '2020'
  },
  {
    id: 57,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2024/10/3XEL-PORA©-P44-14-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza mieszkania w Łodzi. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2024/10/3XEL-PORA©-P44-14-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2024/10/3XEL-PORA©-P44-14.jpg'
    ],
    location: 'Třinec',
    year: '2020'
  },
  {
    id: 58,
    title: 'Byt w Katowicach',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/06/3xel_Sokolska_©_ONI_Studio_32026-17-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza mieszkania w Łodzi. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/06/3xel_Sokolska_©_ONI_Studio_32026-17-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3xel_Sokolska_©_ONI_Studio_32026-17.jpg'
    ],
    location: 'Kopřivnice',
    year: '2020'
  },
  {
    id: 59,
    title: 'Dům w Sieradzu',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/06/3xel_Pogonowskiego_©_ONI_Studio_8885-3-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza mieszkania w Łodzi. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/06/3xel_Pogonowskiego_©_ONI_Studio_8885-3-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3xel_Pogonowskiego_©_ONI_Studio_8885-3.jpg'
    ],
    location: 'Třinec',
    year: '2020'
  },
  {
    id: 60,
    title: 'Dům w Sieradzu',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2024/02/ZASOBY_0002-Z1001393_1920.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza domu w Sieradzu. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2024/02/ZASOBY_0002-Z1001393_1920.jpg'
    ],
    location: 'Kopřivnice',
    year: '2020'
  },
  {
    id: 61,
    title: 'Dům na Ursynowie',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/10/3xel_Muslinowa_©_ONI_Studio_28302-32-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza domu na Warszawskiem Ursynowie. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/10/3xel_Muslinowa_©_ONI_Studio_28302-32-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2023/10/3xel_Muslinowa_©_ONI_Studio_28302-32.jpg'
    ],
    location: 'Bohumín',
    year: '2020'
  },
  {
    id: 62,
    title: 'Apartmán w Essen',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Essen-10-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrza mieszkania w Essen. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Essen-10-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Essen-10.jpg'
    ],
    location: 'Karviná',
    year: '2020'
  },
  {
    id: 63,
    title: 'Byt w Kamienicy',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Maja-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania w łódzkiej kamienicy. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Maja-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Maja.jpg'
    ],
    location: 'Opava',
    year: '2020'
  },
  {
    id: 64,
    title: 'Byt w Katowicach',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Opolska-4-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania w Częstochowie. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Opolska-4-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2023/06/3XEL-PORA©-Opolska-4.jpg'
    ],
    location: 'Třinec',
    year: '2020'
  },
  {
    id: 65,
    title: 'M_CZE',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/05/3XEL-PORA©-Czestochowa-2-of-27-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania w Częstochowie. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/05/3XEL-PORA©-Czestochowa-2-of-27-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2023/05/3XEL-PORA©-Czestochowa-2-of-27.jpg'
    ],
    location: 'Opava',
    year: '2020'
  },
  {
    id: 66,
    title: 'Warm Minimalism',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/04/DSC00997.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz domu jednorodzonego pod Warszawą. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/04/DSC00997.jpg'
    ],
    location: 'Havířov',
    year: '2023'
  },
  {
    id: 67,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/03/Milionowa8-6-of-24-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania pod wynajem w Łodzi na osiedlu Fuzja. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/03/Milionowa8-6-of-24-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2023/03/Milionowa8-6-of-24.jpg'
    ],
    location: 'Havířov',
    year: '2023'
  },
  {
    id: 68,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/01/3XEL-Migdal_small_11.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz Domu w Bobrowcu. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/01/3XEL-Migdal_small_11.jpg'
    ],
    location: 'Orlová',
    year: '2022'
  },
  {
    id: 69,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/01/3xel_Mickiewicza_16_©_ONI_Studio_4124-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania 60m2 w Łodzi. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/01/3xel_Mickiewicza_16_©_ONI_Studio_4124-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2023/01/3xel_Mickiewicza_16_©_ONI_Studio_4124.jpg'
    ],
    location: 'Bruntál',
    year: '2022'
  },
  {
    id: 70,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/01/Kopcinskiego-5-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania 50m2 w Łodzi. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/01/Kopcinskiego-5-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2023/01/Kopcinskiego-5.jpg'
    ],
    location: 'Bohumín',
    year: '2022'
  },
  {
    id: 71,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2023/01/Bonarka-1-of-30-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania w Krakowie na osiedlu Bonarka Living. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2023/01/Bonarka-1-of-30-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2023/01/Bonarka-1-of-30.jpg'
    ],
    location: 'Bohumín',
    year: '2023'
  },
  {
    id: 72,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2022/11/3xel_Milionowa98_©_ONI_Studio_13810-10-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania 50m2 w Łodzi. Fuzja Łódź. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2022/11/3xel_Milionowa98_©_ONI_Studio_13810-10-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2022/11/3xel_Milionowa98_©_ONI_Studio_13810-10.jpg'
    ],
    location: 'Bohumín',
    year: '2022'
  },
  {
    id: 73,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2022/08/3XEL-Architekci-Fuzja-Lodz-9-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja wnętrz mieszkania 50m2 w Łodzi. Fuzja Łódź. Projektowanie wnętrz Łódź, Warszawa, Kraków.',
    images: [
      'https://3xel.pl/wp-content/uploads/2022/08/3XEL-Architekci-Fuzja-Lodz-9-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2022/08/3XEL-Architekci-Fuzja-Lodz-9.jpg'
    ],
    location: 'Havířov',
    year: '2022'
  },
  {
    id: 74,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2022/03/DSC01768-HDR-scaled.jpg',
    description: 'Barakk design - Projekt i realizacja mikro kawalerki o powierzchni 29m2 w Łodzi. Projektowanie indywidualnych wnętrz. Łódź- Warszawa.',
    images: [
      'https://3xel.pl/wp-content/uploads/2022/03/DSC01768-HDR-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2022/03/DSC01768-HDR.jpg'
    ],
    location: 'Orlová',
    year: '2022'
  },
  {
    id: 75,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2021/11/3xel_Mickiewicza_59_©_ONI_Studio_4504-scaled.jpg',
    description: 'Mieszkanie | Łódź | 2022 - Barakk design - Projekt i realizacja mieszkania pod wynajemn. Projektowanie wnętrz Łódź, Warszawa. Zapraszmy do kontaktu.',
    images: [
      'https://3xel.pl/wp-content/uploads/2021/11/3xel_Mickiewicza_59_©_ONI_Studio_4504-scaled.jpg',
      'https://3xel.pl/wp-content/uploads/2021/11/3xel_Mickiewicza_59_©_ONI_Studio_4504.jpg'
    ],
    location: 'Třinec',
    year: '2022'
  },
  {
    id: 76,
    title: 'Apartmán w Łodzi.',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2021/02/Apartment-with-workshop_internet-9.jpg',
    description: 'Apartament | Łódź | 2020 - Barakk design - Projekt i realizacja mieszkania pod wynajemn. Projektowanie wnętrz Łódź, Warszawa. Zapraszmy do kontaktu.',
    images: [
      'https://3xel.pl/wp-content/uploads/2021/02/Apartment-with-workshop_internet-9.jpg'
    ],
    location: 'Orlová',
    year: '2020'
  },
  {
    id: 77,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2021/11/20210215_3xel_2048px-4.jpg',
    description: 'Mieszkanie | Łódź | 2021 - Barakk design - Projekt i realizacja mieszkania pod wynajemn. Projektowanie wnętrz Łódź, Warszawa. Zapraszmy do kontaktu.',
    images: [
      'https://3xel.pl/wp-content/uploads/2021/11/20210215_3xel_2048px-4.jpg'
    ],
    location: 'Bruntál',
    year: '2021'
  },
  {
    id: 78,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2020/12/20201127_3XEL_2048px-1.jpg',
    description: 'Mieszkanie | Łódź | 2020 - Barakk design - Projekt i realizacja mieszkania pod wynajemn. Projektowanie wnętrz Łódź, Warszawa. Zapraszmy do kontaktu.',
    images: [
      'https://3xel.pl/wp-content/uploads/2020/12/20201127_3XEL_2048px-1.jpg'
    ],
    location: 'Frýdek-Místek',
    year: '2020'
  },
  {
    id: 79,
    title: 'Byt w Łodzi',
    category: 'Projekty wnętrz',
    thumbnail: 'https://3xel.pl/wp-content/uploads/2021/04/20210311_3XEL_2048px-2.jpg',
    description: 'Mieszkanie | Łódź | 2020 - Barakk design - Realizacja mieszkania w Łodzi. Projektowanie wnętrz Łódź, Warszawa. Zapraszamy do kontaktu.',
    images: [
      'https://3xel.pl/wp-content/uploads/2021/04/20210311_3XEL_2048px-2.jpg'
    ],
    location: 'Bruntál',
    year: '2020'
  },
  {
    id: 80,
    title: 'Byt z maskami na Ursynowie',
    category: 'Projekty wnętrz',
    thumbnail: 'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-5.jpg',
    description: 'Projektowanie wnętrz Łódź, Warszawa Barakk design. Indywidualne projekty wnętrz prywatnyh i komercyjnycg. Zapraszmy do kontaktu.',
    images: [
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-5.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-6.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-4.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-10.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-11.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-12.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-13.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-9.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-3.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-2.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-1.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-7.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-8.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-14.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-18.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-15.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-16.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-17.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-19.jpg',
      'http://3xel.pl/wp-content/uploads/2020/09/20200629-3XEL_2048-20.jpg'
    ],
    location: 'Frýdek-Místek',
    year: '2020'
  }
];

export function getProjectById(id: number): Project | undefined {
  return projects.find(p => p.id === id);
}

export function getAllProjects(): Project[] {
  return projects;
}

