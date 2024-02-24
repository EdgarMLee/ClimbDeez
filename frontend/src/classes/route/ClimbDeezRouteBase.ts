import { GradeScaleType } from "../../types/grades";
export class ClimbDeezRouteBase {
  grade: GradeScaleType;
  constructor(grade: GradeScaleType) {
    this.grade = grade;
  }

  getGrade = () => {
    return this.grade;
  };
}
