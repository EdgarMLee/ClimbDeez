enum VScale {
  V0 = "V0",
  V1 = "V1",
  V2 = "V2",
  V3 = "V3",
  V4 = "V4",
  V5 = "V5",
  // add more later, goes up to 17
}

enum FrenchScale {
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
  FiveA = "5a",
  FiveB = "5b",
}

type GradeScaleType = typeof VScale | typeof FrenchScale;
export { VScale, FrenchScale, GradeScaleType };
