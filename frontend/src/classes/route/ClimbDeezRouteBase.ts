import { GradeScaleType } from "../../types/routes";
export class ClimbDeezRouteBase {
  grade: GradeScaleType;
  constructor(grade: GradeScaleType) {
    this.grade = grade;
  }

  getGrade = () => {
    return this.grade;
  };
}
