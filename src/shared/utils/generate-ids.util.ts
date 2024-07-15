export class GenerateIdUtil {
  private static counter = 0;

  public static generateUniqueNumericId(): string {
    const timestamp: number = new Date().getTime();
    this.counter++;
    const uniqueId = `${timestamp}${this.counter}`;
    return uniqueId;
  }
}
