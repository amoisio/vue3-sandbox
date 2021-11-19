export default class CounterService {
    private _count: number = 0;

    public inc(): void {
        this._count++;
    }

    get count(): number {
        return this._count;
    }
    
}