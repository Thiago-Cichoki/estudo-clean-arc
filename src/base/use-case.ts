export interface UseCase<S, T> {
  execute(params?: S): Promise<T>;
}
