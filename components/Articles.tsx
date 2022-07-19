import Link from "next/link";

export default function Articles({ posts }: any) {
  return (
    <section className="w-full px-10 mx-auto bg-white lg:py-24 max-w-7xl">
      <div className="space-y-12 md:text-left">
        <div className="mb-20 space-y-5 sm:mx-auto sm:space-y-4">
          <span
            id="aprendizaje"
            className="block tracking-widest text-gray-400 uppercase pt-28"
          >
            #aprendizaje
          </span>
          <h2 className="text-4xl font-black text-gray-800 xl:text-5xl">
            Algunas publicaciones para tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-yellow-300 to-amber-500">
              Aprendizaje
            </span>
          </h2>
          <p className="text-xl text-gray-500">
            Estás publicaciones se hacen de modo de guía para un mejor
            entendimiento de los lectores, también estás publiaciones son
            gracias a nuestro colaboradores y tu puedes crear las tuyas
            colaborando en este proyecto.
          </p>

          <div className="inline-grid grid-cols-3 gap-3 tall:grid-cols-1">
            {posts.map((post: any) => (
              <Link href={`blog/${post.slug}`}>
                <a
                  key={post.slug}
                  className="block p-6 bg-gray-300/80 shadow-lg border border-gray-200 rounded-lg max-w-sm"
                >
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    {post.frontMatter.title}
                  </h5>
                  <p className="font-normal text-gray-700">
                    {post.frontMatter.summary}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
