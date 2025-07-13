"use client";
import Link from "next/link";

export default function Map() {
  return (
    <div>
      <iframe
        width="100%"
        height="400"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Oduman+(Wiz-serene%20Hotel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <Link href="https://www.gps.ie/">gps vehicle tracker</Link>
      </iframe>
    </div>
  );
}
