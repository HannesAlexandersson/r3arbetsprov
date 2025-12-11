import Skeleton from "@/components/Skeleton/Skeleton";

const loading = () => {
  return (
    <>
      <main className="mx-auto min-h-screen pt-20">
        <section className="flex flex-col gap-16">
          <Skeleton className={"h-32"} />
          <Skeleton className={"h-32"} />
          <Skeleton className={"h-32"} />
          <Skeleton className={"h-32"} />
        </section>
      </main>
    </>
  );
};

export default loading;
