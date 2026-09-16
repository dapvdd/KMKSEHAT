const eventDate = 'Minggu, 20 September 2026';
const eventDeparture = '19 September 2026 malam';
const eventLocation = 'Gunung Andong, Magelang';

export const siteConfig = {
  name: 'KMK SEHAT 2026',
  eventTitle: 'TRACKING GUNUNG ANDONG',
  organisation: 'KMK SV UGM',
  organisationTagline: 'servus servorum dei.',
  tagline: 'Sehat badannya, hangat keluarganya!',
  date: eventDate,
  departure: eventDeparture,
  location: eventLocation,
  formUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLScqccRSLyaDEwE1H6CbguDusUcnBGLRFyaptsnSNNFraXSOTw/viewform',
  participantDataUrl:
    'https://docs.google.com/spreadsheets/d/18DvDFSAcsmMzxp3v1N0XE5rrPXWz3s4jQA8VQGXQAIo/edit?usp=sharing',
  details: [
    { label: 'Tanggal', value: eventDate, icon: 'calendar' },
    { label: 'Keberangkatan', value: eventDeparture, icon: 'moon' },
    { label: 'Lokasi', value: eventLocation, icon: 'pin' },
  ],
  preparationItems: [
    { label: 'Persiapkan barang-barang pribadi', icon: 'pack' },
    { label: 'Gunakan perlengkapan yang nyaman untuk tracking', icon: 'shoe' },
    { label: 'Jangan lupa air minum', icon: 'water' },
    { label: 'Bawa kebutuhan pribadi', icon: 'heart' },
    { label: 'Persiapkan fisik dari sekarang', icon: 'muscle' },
  ],
};
