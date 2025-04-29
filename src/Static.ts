export default class TestClass {
    // 1. Публичное поле counter с начальным значением 0
    public counter: number = 0;

    // 2. Публичное статическое поле counterStatic с начальным значением 0
    public static counterStatic: number = 0;

    // 3. Публичный статический метод PI, возвращающий значение Math.PI
    public static PI(): number {
        return Math.PI;
    }

    // 4. Публичный статический метод ceil, округляющий число в большую сторону
    public static ceil(value: number): number {
        return Math.ceil(value);
    }
}
