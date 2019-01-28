//bikin action pilih lagu

export const selectSong = song => {
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
