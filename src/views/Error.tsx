import Container from "../components/Container";

function Error() {
  return (
    <Container title="Error" description="Error">
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-3xl">
        <h1 className="font-bold text-3xl tracking-tight mb-4 text-white">
          Error 404
        </h1>
        <span className="text-gray-400 text-base mb-8">
          What are you looking for? 🤨
        </span>
      </div>
    </Container>
  );
}

export default Error;
