import Container from "../components/Container";

function Error() {
  return (
    <Container title="Error" description="Error">
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-3xl">
        <h1 className="font-bold text-5xl tracking-tight mb-4 text-black">
          Error 404
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          What are you looking for? 🤨
        </p>
      </div>
    </Container>
  );
}

export default Error;
