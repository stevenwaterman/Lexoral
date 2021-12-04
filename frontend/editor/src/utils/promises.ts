type RegisterPromise = <T>(promise: Promise<T>) => Promise<T>;
type Runner = (register: RegisterPromise) => Promise<void>;

export async function resolveAllPromises(runner: Runner) {
  const promises: Promise<any>[] = [];
  const register: RegisterPromise = <T>(promise: Promise<T>) => {
    promises.push(promise);
    return promise;
  }
  await runner(register);
  await Promise.all(promises).catch(err => {
    console.error(err);
    return Promise.reject("Error during initialisation");
  });
}
