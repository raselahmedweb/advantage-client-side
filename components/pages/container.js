
export default function Container({children, id}) {
  return (
    <section id={id} className="py-4 md:py-10">
        <div className="lg:w-10/12 m-auto px-4 md:px-8 lg:px-20">
        {children}
        </div>
    </section>
  )
}
