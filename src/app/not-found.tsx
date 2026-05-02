import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-32 text-center">
      <p className="font-accent italic text-primary text-2xl">404</p>
      <h1 className="text-5xl lg:text-6xl mt-4 mb-6">Página no encontrada</h1>
      <p className="text-muted max-w-md mx-auto mb-10">
        La página que buscas no existe o fue movida. Vuelve al inicio para
        seguir explorando.
      </p>
      <Link href="/" className="btn-primary">Volver al inicio</Link>
    </section>
  );
}
