async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  })
}

export default async function about() {
  await takeTime();
  // throw new Error("given error for this page");
  return (
    <div>
      This is about
    </div>
  )
}
