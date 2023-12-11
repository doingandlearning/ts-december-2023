{
  // Dictionary Type
  interface ChannelFavourites {
    [channel: string]: {
      lastProgram: string;
      position: string;
      whenViewed: Date;
    };
  }

  const obj1: ChannelFavourites = {
    bbc1: "Strictly",
    cbbc: "Rabbit",
    bbc2: "",
    bbcParliment: {
      lastProgram: "",
      position: "",
      whenViewed: new Date(),
    },
  };
}
