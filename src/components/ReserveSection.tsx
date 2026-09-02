import { restaurant } from "@/lib/content";
import Reveal from "./Reveal";

export default function ReserveSection() {
  return (
    <section className="bg-ink px-6 py-16 md:px-10 md:py-20">
      <Reveal
        id="reservieren"
        className="mx-auto max-w-2xl rounded-2xl bg-panel px-8 py-14 text-center md:px-16 md:py-16"
      >
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-brass-dim/60 font-display text-base text-brass">
          {restaurant.name.charAt(0)}
        </div>

        <h2 className="font-display text-3xl font-light leading-snug text-ivory md:text-4xl">
          Welcome
        </h2>

        <div className="mx-auto my-7 rule" />

        <address className="font-sans text-sm not-italic leading-relaxed text-ivory-dim">
          {restaurant.address.street}
          <br />
          {restaurant.address.city}
          <br />
          {restaurant.address.country}
        </address>

        <table className="mx-auto mt-8 w-full max-w-xs text-left font-sans text-sm text-ivory-dim">
          <tbody>
            {restaurant.openingHours.map((row) => (
              <tr key={row.day}>
                <th scope="row" className="py-1.5 pr-4 font-normal uppercase tracking-[0.06em] text-ivory-dim">
                  {row.day}
                </th>
                <td className="py-1.5 text-right uppercase tracking-[0.06em]">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <a href="#reservieren" className="btn-reserve mt-9 inline-flex px-6! py-3! text-[0.7rem]">
          Reservieren
          <span aria-hidden="true">&rarr;</span>
        </a>
      </Reveal>
    </section>
  );
}
