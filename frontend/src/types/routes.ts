enum VScale {
  V0 = "V0",
  V1 = "V1",
  V2 = "V2",
  V3 = "V3",
  V4 = "V4",
  V5 = "V5",
  V6 = "V6",
  V7 = "V7",
  V8 = "V8",
  V9 = "V9",
  V10 = "V10",
  V11 = "V11",
  V12 = "V12",
  V13 = "V13",
  V14 = "V14",
  V15 = "V15",
  V16 = "V16",
  V17 = "V17",
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
