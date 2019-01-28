import { combineReducers } from "redux";

//reducer dari list lagu
const songReducer = () => {
  return [
    { title: "judul satu", duration: "4:30" },
    { title: "judul dua", duration: "3:30" },
    { title: "judul tiga", duration: "2:20" }
  ];
};

//reducer dari detail sebuah lagi
//ambil parameter 'song' yang di deklarasiin di action

const selectedSongReducer = (selectSong = null, action) => {
  //cek apakah si action yang dipilih sesuai dengan action yang diinginkan
  //kalo iya return
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectSong;
};

export default combineReducers({
  song: songReducer,
  selectSong: selectedSongReducer
});
