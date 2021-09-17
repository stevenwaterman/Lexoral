export function run(event: { uid: string }) {
  console.log(event.uid);
  console.log(JSON.stringify(event));
}
